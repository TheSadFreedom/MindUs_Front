import React from 'react'
import {
  FooterStyle, 
  FooterLinks, 
} from './Footer.styled'
import { StyledNavigationH2, StyledNavigationLink } from '../../styles/styled'


export const Footer = () =>(
  <footer>
    <FooterStyle>
      <StyledNavigationH2>MindUs</StyledNavigationH2>
      <div>
        <StyledNavigationH2>Контакты</StyledNavigationH2>
        <FooterLinks>
          <StyledNavigationLink to={'/'}>+7 (999) 999-99-99</StyledNavigationLink>
          <StyledNavigationLink to={'/'}>Дискорд</StyledNavigationLink>
          <StyledNavigationLink to={'/'}>Телеграм</StyledNavigationLink>
          <StyledNavigationLink to={'/'}>email@gmail.com</StyledNavigationLink>
        </FooterLinks>
      </div>
      <div>
        <StyledNavigationH2>Правовая информация</StyledNavigationH2>
        <FooterLinks>
          <StyledNavigationLink to={'/'}>Политика конфиденциальности</StyledNavigationLink>
          <StyledNavigationLink to={'/'}>Условия пользования сайтом</StyledNavigationLink>
        </FooterLinks>
      </div>
    </FooterStyle>
  </footer>
)
