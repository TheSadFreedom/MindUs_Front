import React, { useState, useEffect, ReactNode } from "react";
import { ScrollToTopButtonStyled } from "./ScrollToTopButton.styled";

interface ScrollToTopButtonProps {
  children: ReactNode;
}

const ScrollToTopButton: React.FC<ScrollToTopButtonProps> = ({ children }) => {
  const ArrowUp: string = require("../../../Images/ArrowUp.svg").default;
  
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    const scrollStep = -window.scrollY / (500 / 15);
    const scrollInterval = setInterval(() => {
      if (window.scrollY !== 0) {
        window.scrollBy(0, scrollStep);
      } else {
        clearInterval(scrollInterval);
      }
    }, 15);
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div>
      <ScrollToTopButtonStyled 
        onClick={scrollToTop}
        style={{ display: isVisible ? "block" : "none" }}
        title="Вернуться наверх"
        src={ArrowUp}
      >
      </ScrollToTopButtonStyled>
      {children}
    </div>
  );
};

export default ScrollToTopButton;
