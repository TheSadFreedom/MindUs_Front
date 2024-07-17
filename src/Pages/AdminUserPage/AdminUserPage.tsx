import React, { useState, useEffect } from "react";
import axios from "axios";
import { StyledH1, StyledNavigationNoActiveLink } from "../../styles/styled";
import {
  AdminUserPageStyled,
  TableStyled,
  TableRowStyled,
  TableCellStyled,
  AdminUserCont,
} from "./AdminUserPage.styled";

interface User {
  userLogin: string;
  userEmail: string;
  userRole: boolean;
  userPassword: string; // Assuming password is also part of the user object
}

export const AdminUserPage: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get<User[]>("https://localhost:7168/api/Users");
        console.log("Данные ответа:", response.data);
        setUsers(response.data);
      } catch (error) {
        console.error("Ошибка при получении пользователей:", error);
      }
    };

    fetchUsers();
  }, []);

  const handleDelete = async (userLogin: string) => {
    try {
      await axios.delete(`https://localhost:7168/api/Users/${userLogin}`);
      setUsers((prevUsers) => prevUsers.filter((user) => user.userLogin !== userLogin));
    } catch (error) {
      console.error("Ошибка при удалении пользователя:", error);
    }
  };

  const handleRoleChange = async (updatedUser: User, newRole: boolean) => {
    try {
      const updatedUserData = {
        ...updatedUser,
        userRole: newRole,
      };

      await axios.put(`https://localhost:7168/api/Users/${updatedUser.userLogin}`, updatedUserData);
      setUsers((prevUsers) =>
        prevUsers.map((user) =>
          user.userLogin === updatedUser.userLogin ? updatedUserData : user
        )
      );
    } catch (error) {
      console.error("Ошибка при изменении роли пользователя:", error);
    }
  };

  return (
    <AdminUserPageStyled>
      <AdminUserCont>
        <StyledH1>Пользователи:</StyledH1>
        <StyledNavigationNoActiveLink to={"/Profile/:login"}>Назад</StyledNavigationNoActiveLink>
      </AdminUserCont>

      <TableStyled>
        <thead>
          <tr>
            <TableCellStyled>Логин</TableCellStyled>
            <TableCellStyled>Email</TableCellStyled>
            <TableCellStyled>Роль</TableCellStyled>
            <TableCellStyled>Действия</TableCellStyled>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <TableRowStyled key={user.userLogin}>
              <TableCellStyled>{user.userLogin}</TableCellStyled>
              <TableCellStyled>{user.userEmail}</TableCellStyled>
              <TableCellStyled>
                <select
                  value={user.userRole ? "admin" : "user"}
                  onChange={(e) => handleRoleChange(user, e.target.value === "admin")}
                >
                  <option value="user">Пользователь</option>
                  <option value="admin">Админ</option>
                </select>
              </TableCellStyled>
              <TableCellStyled>
                <button onClick={() => handleDelete(user.userLogin)}>Удалить</button>
              </TableCellStyled>
            </TableRowStyled>
          ))}
        </tbody>
      </TableStyled>
    </AdminUserPageStyled>
  );
};
