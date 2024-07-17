import {
  ProductPageStyled,
  ProductPageStyledCont0,
  ProductPageStyledCont1,
  ProductPageStyledCont2,
} from "./Product.styled";
import { StyledH1, StyledH3, StyledSmallP } from "../../styles/styled";



export const ProductPage = () => {
  return (
    <ProductPageStyled>
      <ProductPageStyledCont0>
      <ProductPageStyledCont1>
        <ProductPageStyledCont2>
          <StyledH1>Название нейросети</StyledH1>
        </ProductPageStyledCont2>
        <StyledH3>Описание нейросети</StyledH3>
        <StyledSmallP>
          Vorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
          turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec
          fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus
          elit sed risus. Maecenas eget condimentum velit, sit amet feugiat
          lectus. Class aptent taciti sociosqu ad litora torquent per conubia
          nostra, per inceptos himenaeos. Praesent auctor purus luctus enim
          egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex.
          Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum
          lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in
          elementum tellus.
        </StyledSmallP>
      </ProductPageStyledCont1>
      </ProductPageStyledCont0>
    </ProductPageStyled>
  );
};
