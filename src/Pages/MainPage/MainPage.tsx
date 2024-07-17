import React from "react";

import {
  MainPageStyled,
  FirstSlideStyled,
  FirstSlideLeftStyled,
  FirstSlideRightStyled,
  UTPTitle,
  UTPShortInfo,
  FluidImg,
  SecondSlideStyled,
  StyledH1Edit,
  ShortDescription,
} from "./MainPage.styled";

const Fluid: string = require("../../Images/Fluid.svg").default;

export const MainPage = () => {

  return (
    <MainPageStyled>
      <FirstSlideStyled>
        <FirstSlideLeftStyled>
          <UTPTitle>
            AIStore — все нейросети для бизнеса в одном приложении
          </UTPTitle>
          <UTPShortInfo>
            MindUs - ваш магазин нейросетей, где инновация встречает
            потребность. Обеспечьте себя передовыми решениями в области
            искусственного интеллекта прямо сейчас!
          </UTPShortInfo>
        </FirstSlideLeftStyled>
        <FirstSlideRightStyled>
          <FluidImg src={Fluid} alt="Fluid SVG" />
        </FirstSlideRightStyled>
      </FirstSlideStyled>
      <SecondSlideStyled>
        <StyledH1Edit>Кратко о проекте</StyledH1Edit>
        <ShortDescription>
          MindUs - ваш надежный партнер в мире искусственного интеллекта,
          предлагающий самые передовые нейросетевые решения для широкого спектра
          задач. Наш магазин специализируется на предоставлении
          высококачественных нейронных сетей, разработанных для решения
          разнообразных задач в области компьютерного зрения, обработки
          естественного языка, анализа данных и других областей. У нас вы
          найдете широкий выбор нейросетей, подходящих как для начинающих
          исследователей, так и для профессионалов, желающих расширить свои
          возможности в области машинного обучения и искусственного интеллекта.
          Мы уделяем особое внимание качеству наших продуктов, предоставляя
          только самые надежные и проверенные решения, чтобы вы могли быть
          уверены в их эффективности. Наша цель - помочь вам воплотить в жизнь
          ваши идеи и проекты, предоставив вам необходимые инструменты для
          успешного достижения ваших целей. Присоединяйтесь к MindUs уже сегодня
          и начните свой путь к новым достижениям в мире искусственного
          интеллекта!
        </ShortDescription>
      </SecondSlideStyled>
    </MainPageStyled>
  );
};
