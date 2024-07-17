//librares
import React, { useState, useEffect } from "react";
import { StyledNavigationLink, StyledNavigationNoActiveLink } from "../../styles/styled";
import { Link } from "react-router-dom";
//styles
import {
  StyledHeader,
  HeaderLogoStyled,
  HeaderLinksStyled,
  HeaderSignLinksStyled,
} from "./Header.styled";

const Logo: string = require("../../Images/logo.svg").default;

export const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userLogin, setUserLogin] = useState("");

  useEffect(() => {
    const login = localStorage.getItem("loggedInUser");
    if (login) {
      setIsLoggedIn(true);
      setUserLogin(login);
    }
  }, []);

  return (
    <StyledHeader>
      <Link to={"/"}>
        <HeaderLogoStyled src={Logo} alt="logo" />
      </Link>
      <HeaderLinksStyled>
        <StyledNavigationLink to="/">Главная</StyledNavigationLink>
        <StyledNavigationLink to="/Shop">Каталог</StyledNavigationLink>
        <StyledNavigationLink to="/Contacts">Контакты</StyledNavigationLink>
      </HeaderLinksStyled>

      <HeaderSignLinksStyled>
        {isLoggedIn ? (
          <>
            <StyledNavigationLink to={`/Profile/${userLogin}`} style={{ textAlign: "right" }}>
              Профиль
            </StyledNavigationLink>
            <p>l</p>
            <StyledNavigationNoActiveLink
              to="/Login"
              onClick={() => {
                localStorage.clear(); 
                setIsLoggedIn(false);
                setUserLogin("");
              }}
              style={{ textAlign: "left" }}
            >
              Выйти
            </StyledNavigationNoActiveLink>
          </>
        ) : (
          <>
            <StyledNavigationLink to="/Login" style={{ textAlign: "right" }}>
              Войти
            </StyledNavigationLink>
            <p>l</p>
            <StyledNavigationLink to="/SignUp" style={{ textAlign: "left" }}>
              Регистрация
            </StyledNavigationLink>
          </>
        )}
      </HeaderSignLinksStyled>
    </StyledHeader>
  );
};
