import { ContactsPageStyled,ContactsPageStyledLogoImg, ContactsPageStyledImg, ContactsPageStyledLink, ContactsPageStyledLinks, ContactsPageStyledTitle } from "./ContactsPage.styled";
import { Link } from "react-router-dom";

const Fluid: string = require("../../Images/Fluid.svg").default;
const Phone: string = require("../../Images/phone.svg").default;
const Discord: string = require("../../Images/discord.svg").default;
const Telegram: string = require("../../Images/telegram.svg").default;
const email: string = require("../../Images/email.svg").default;

export const ContactsPage = () => {
    return (
        <ContactsPageStyled>
            <ContactsPageStyledTitle>Связаться с нами можно тут</ContactsPageStyledTitle>
            <ContactsPageStyledLinks>
                <Link to={"/Profile"}><ContactsPageStyledLogoImg src={Phone}/></Link>
                <ContactsPageStyledLink to="/Profile">+7 (999) 999-99-99</ContactsPageStyledLink>
                <Link to={"/Profile"}><ContactsPageStyledLogoImg src={Discord}/></Link>
                <ContactsPageStyledLink to="/Profile">Discord</ContactsPageStyledLink>
                <Link to={"/Profile"}><ContactsPageStyledLogoImg src={Telegram}/></Link>
                <ContactsPageStyledLink to="/Profile">Telegram</ContactsPageStyledLink>
                <Link to={"/Profile"}><ContactsPageStyledLogoImg src={email}/></Link>
                <ContactsPageStyledLink to="/Profile">email@email.com</ContactsPageStyledLink>
            </ContactsPageStyledLinks>
            <ContactsPageStyledImg src={Fluid} alt="Fluid SVG" />
        </ContactsPageStyled>
  );
};
