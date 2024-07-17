import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  ProfileH1,
  ProfileMyAIStyled,
  UserPageStyled,
  UserPageStyledCont1,
  UserPageStyledCont2,
  UserPageStyledQuit,
} from "./ProfilePage.styled";
import { StyledH1, StyledH2 } from "../../styles/styled";
import { EditProfileBtn } from "../../Components/Buttons/EditProfileBtn/EditProfileBtn";
import { UploadAIBtn } from "../../Components/Buttons/UploadAIBtn/UploadAIBtn";
import { AdminBtn } from "../../Components/Buttons/AdminBtn/AdminBtn";
import { CardProduct } from "../../Components/CardProduct/CardProduct";

interface NeuralNetwork {
  aiModelId: number;
  aiModelName: string;
  aiModelAuthor: string;
  aiModelDescription: string;
}

const ProfilePage: React.FC = () => {
  const [neuralNetworks, setNeuralNetworks] = useState<NeuralNetwork[]>([]);
  const [loading, setLoading] = useState(true);
  const loggedInUser = localStorage.getItem("loggedInUser");
  const isAdmin = localStorage.getItem("userRole") === "true";

  const handleLogout = () => {
    localStorage.clear();
  };

  useEffect(() => {
    const fetchNeuralNetworks = async () => {
      try {
        const response = await axios.get(`https://localhost:7168/api/AiModels/ByAuthor/${loggedInUser}`, {
          params: { author: loggedInUser },
        });
        setNeuralNetworks(response.data);
      } catch (error) {
        console.error("Failed to fetch neural networks", error);
      } finally {
        setLoading(false);
      }
    };

    fetchNeuralNetworks();
  }, [loggedInUser]);

  return (
    <UserPageStyled>
      <UserPageStyledCont1>
        <UserPageStyledCont2>
          <StyledH1>{loggedInUser}</StyledH1>
          <UserPageStyledQuit to="/" onClick={handleLogout}>
            Выйти из профиля
          </UserPageStyledQuit>
        </UserPageStyledCont2>
        {isAdmin && <AdminBtn />}
        <EditProfileBtn />
        <UploadAIBtn />
      </UserPageStyledCont1>
      <ProfileH1>Мои нейросети</ProfileH1>
      <ProfileMyAIStyled>
        {loading ? (
          <p>Loading...</p>
        ) : neuralNetworks.length === 0 ? (
          <StyledH2>Ничего не найдено</StyledH2>
        ) : (
          neuralNetworks.map((network) => (
            <CardProduct
              key={network.aiModelId}
              id={network.aiModelId}
              name={network.aiModelName}
              author={network.aiModelAuthor}
              description={network.aiModelDescription}
            />
          ))
        )}
      </ProfileMyAIStyled>
    </UserPageStyled>
  );
};

export default ProfilePage;
