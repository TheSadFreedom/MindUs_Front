import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import axios from "axios";
import { BrowserRouter as Router } from "react-router-dom";
import { LoginPage } from "./LoginPage";

// Мокирование axios
jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("LoginPage", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("renders login page", () => {
    render(
      <Router>
        <LoginPage />
      </Router>
    );

    expect(screen.getByLabelText(/Логин/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Пароль/i)).toBeInTheDocument();
    expect(screen.getByText(/Войти/i)).toBeInTheDocument();
  });

  test("updates login state on input change", () => {
    render(
      <Router>
        <LoginPage />
      </Router>
    );

    const loginInput = screen.getByLabelText(/Логин/i);
    fireEvent.change(loginInput, { target: { value: "testuser" } });

    expect(loginInput).toHaveValue("testuser");
  });

  test("updates password state on input change", () => {
    render(
      <Router>
        <LoginPage />
      </Router>
    );

    const passwordInput = screen.getByLabelText(/Пароль/i);
    fireEvent.change(passwordInput, { target: { value: "password123" } });

    expect(passwordInput).toHaveValue("password123");
  });

  test("submits form and handles successful login", async () => {
    mockedAxios.get.mockResolvedValue({
      status: 200,
      data: { userPassword: "password123", userRole: "admin" }
    });

    render(
      <Router>
        <LoginPage />
      </Router>
    );

    fireEvent.change(screen.getByLabelText(/Логин/i), { target: { value: "testuser" } });
    fireEvent.change(screen.getByLabelText(/Пароль/i), { target: { value: "password123" } });
    fireEvent.click(screen.getByText(/Войти/i));

    await waitFor(() => {
      expect(mockedAxios.get).toHaveBeenCalledWith("https://localhost:7168/api/Users/testuser", expect.any(Object));
      expect(localStorage.setItem).toHaveBeenCalledWith("loggedInUser", "testuser");
      expect(localStorage.setItem).toHaveBeenCalledWith("userRole", "admin");
    });
  });

  test("handles login error", async () => {
    mockedAxios.get.mockRejectedValue({ response: { status: 401, statusText: "Unauthorized" } });

    render(
      <Router>
        <LoginPage />
      </Router>
    );

    fireEvent.change(screen.getByLabelText(/Логин/i), { target: { value: "testuser" } });
    fireEvent.change(screen.getByLabelText(/Пароль/i), { target: { value: "wrongpassword" } });
    fireEvent.click(screen.getByText(/Войти/i));

    await waitFor(() => {
      expect(screen.getByText(/Ошибка сервера: 401 Unauthorized/i)).toBeInTheDocument();
    });
  });

  test("handles server not responding", async () => {
    mockedAxios.get.mockRejectedValue({ request: {} });

    render(
      <Router>
        <LoginPage />
      </Router>
    );

    fireEvent.change(screen.getByLabelText(/Логин/i), { target: { value: "testuser" } });
    fireEvent.change(screen.getByLabelText(/Пароль/i), { target: { value: "password123" } });
    fireEvent.click(screen.getByText(/Войти/i));

    await waitFor(() => {
      expect(screen.getByText(/Сервер не отвечает. Пожалуйста, попробуйте позже./i)).toBeInTheDocument();
    });
  });
});
