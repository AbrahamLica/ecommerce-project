import styled from "styled-components";

/////////////////////////// PROPS ///////////////////////

export type ContainerProps = {
  color?: string;
  id?: any;
  width?: string;
  heigth?: string;
  backgroundColor?: string;
  displayFlex?: boolean;
  flex?: string;
  flexWrap?: boolean;
  alignItems?: string;
  margin?: string;
  padding?: string;
  column?: boolean;
  border?: string;
  borderRadius?: string;
  cursorPointer?: boolean;
  backgroundImage?: string;
  backgroundPosition?: string;
  backgroundSize?: string;
  justifyContent?: string;
  bold?: boolean;
  fontSize?: string;
  textAlign?: string;
};

export type InputProps = {
  color?: string;
  bold?: boolean;
  fontSize?: string;
  width?: string;
  backgroundColor?: string;
  margin?: string;
};

export type TextProps = {
  color?: string;
  bold?: boolean;
  fontSize?: string;
  textAlign?: string;
  margin?: string;
  backgroundColor?: string;
  padding?: string;
  borderRadius?: string;
  cursorPointer?: boolean;
  zIndex?: boolean;
};

export type ImgDetailsProps = {
  ImgDetailsCharactersWidth?: boolean;
  ImgDetailsCharactersHeight?: boolean;

  ImgDetailsComicsWidth?: boolean;
  ImgDetailsComicsHeight?: boolean;

  ImgDetailsCreatorsWidth?: boolean;
  ImgDetailsCreatorsHeight?: boolean;

  ImgDetailsEventssWidth?: boolean;
  ImgDetailsEventssHeight?: boolean;

  ImgDetailsSeriesWidth?: boolean;
  ImgDetailsSeriesHeight?: boolean;

  ImgDetailsStoriesWidth?: boolean;
  ImgDetailsStoriesHeight?: boolean;
};

export type MainContainerDetailsProps = {
  background: any;
};

/////////////////////////// GENERAL ///////////////////////

export const Container = styled.div<ContainerProps>`
  color: ${(props) => props.color};
  width: ${(props) => props.width};
  height: ${(props) => props.heigth};
  background-color: ${(props) => props.backgroundColor};
  display: ${(props) => (props.displayFlex ? "flex" : "block")};
  flex: ${(props) => props.flex};
  flex-direction: ${(props) => (props.column ? "column" : "row")};
  flex-wrap: ${(props) => props.flexWrap && "wrap"};
  align-items: ${(props) => props.alignItems};
  justify-content: ${(props) => props.justifyContent};
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
  border: ${(props) => props.border};
  border-radius: ${(props) => props.borderRadius};
  background-image: url(${(props) => props.backgroundImage});
  background-position: ${(props) => props.backgroundPosition};
  background-repeat: no-repeat;
  background-size: ${(props) => props.backgroundSize};
  cursor: ${(props) => (props.cursorPointer ? "pointer" : null)};
  overflow: hidden;
`;

export const Text = styled.p<TextProps>`
  color: ${(props) => props.color};
  font-weight: ${(props) => (props.bold ? "bold" : "light")};
  font-size: ${(props) => props.fontSize};
  text-align: ${(props) => props.textAlign};
  margin: ${(props) => props.margin};
  background-color: ${(props) => props.backgroundColor};
  border-radius: ${(props) => props.borderRadius};
  padding: ${(props) => props.padding};
  cursor: ${(props) => (props.cursorPointer ? "pointer" : null)};
  z-index: ${(props) => (props.zIndex ? "1" : "")};
`;

export const Link = styled.a<TextProps>`
  color: ${(props) => props.color};
  font-weight: ${(props) => (props.bold ? "bold" : "light")};
  font-size: ${(props) => props.fontSize};
  text-align: ${(props) => props.textAlign};
  cursor: pointer;
  text-decoration: none;
`;

/////////////////////////// ITEMS ///////////////////////

export const ContainerCart = styled.div<ContainerProps>`
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: all ease 0.2s;
`;

export const ContainerImgClose = styled.div<ContainerProps>`
  width: 100%;
  justify-content: flex-end;
`;

export const ImgClose = styled.img<ContainerProps>`
  width: 50px;
  cursor: pointer;
`;

export const ItemsCart = styled.div<ContainerProps>`
  width: 100%;
  border-bottom: 5px solid black;
  margin-bottom: 1rem;
`;

export const InformationsCartItem = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const ImgCartItem = styled.img<ContainerProps>`
  height: 120px;
  max-width: 120px;
`;

export const ContainerValues = styled.p<ContainerProps>`
  width: 100%;
`;

export const ButtonFinish = styled.button<ContainerProps>`
  font-size: 1.5rem;
  padding: 5px;
  border-radius: 10px;
  background-color: black;
  border: none;
  cursor: pointer;
  color: white;
  font-weight: bold;
  transition: 0.4s;

  :hover {
    box-shadow: 5px 5px 13px black;
  }
`;

// @media (max-width: 1024px) {
//   .informationsItemCarrinho {
//     flex-direction: column;
//     align-items: center;
//   }

//   .nameItemCarrinho {
//     font-size: 1.2rem;
//     margin-bottom: 8px;
//   }

//   .imgItemCarrinho {
//     margin-bottom: 10px;
//   }

//   .qtdItemCarrinho {
//     margin-bottom: 8px;
//   }

//   .btnFinalizarAberto {
//     width: 100%;
//     font-size: 1.1rem;
//   }
// }

// @media (max-width: 768px) {
//   .total h2 {
//     font-size: 1.3rem;
//   }
// }

// @media (max-width: 425px) {
//   .total h2 {
//     font-size: 1.1rem;
//   }

//   .containerCarrinhoFechado {
//     display: none;
//   }

//   .containerCarrinhoAberto {
//     z-index: 10;
//     width: 100vw;
//     position: fixed;
//     height: 100%;
//     padding: 5px;
//   }

//   .informationsItemCarrinho {
//     flex-direction: row;
//     padding: 4px;
//     margin: 5px;
//   }

//   .nameItemCarrinho {
//     font-size: 0.7rem;
//   }

//   .itemCarrinhoAberto {
//     border-bottom: 2px solid black;
//     padding: 0px;
//     margin: 0;
//   }

//   .qtdItemCarrinho {
//     font-size: 0.7rem;
//     margin: 2px;
//   }

//   .valorItemCarrinho {
//     font-size: 0.7rem;
//   }

//   .imgItemCarrinho {
//     height: auto;
//     width: 50px;
//   }

//   .closeImg {
//     width: 30px;
//   }
// }
