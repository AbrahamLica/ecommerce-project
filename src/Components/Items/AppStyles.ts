import styled from "styled-components";

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

export const ContainerItems = styled.div<ContainerProps>`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const ItemImg = styled.img<ContainerProps>`
  width: 300px;
  height: 300px;
  transition: 0.2s;

  :hover {
    transform: translate(10px, -10px);
  }

  @media (max-width: 320px) {
    width: 250px;
    height: 250px;
  }
`;

export const ContainerItem = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 30px;
  max-width: 303px;
  min-height: 500px;
  max-height: 500px;
`;

export const ContainerInformations = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;
  height: 100px;
  width: 300px;
`;

export const ItemName = styled.p<ContainerProps>`
  font-size: 1rem;
  text-align: center;
  letter-spacing: 0.2rem;
  line-height: 1.3rem;
`;

export const ItemPrice = styled.p<ContainerProps>`
  font-size: 0.9rem;
  transition: 0.2s;
  text-align: center;

  :hover {
    transform: scale(1.2);
  }
`;

export const ContainerButtons = styled.div<ContainerProps>`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  width: 100%;
  border-bottom: 3px solid black;
  margin-top: 1.5rem;

  @media (max-width: 320px) {
    width: 90%;
  }
`;

export const ContainerDetails = styled.div<ContainerProps>`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  cursor: pointer;
  transition: 0.2s;

  :hover {
    transform: scale(1.2);
  }
`;

export const AddCarrinho = styled.div<ContainerProps>`
  cursor: pointer;
  transition: 0.2s;

  :hover {
    transform: scale(1.2);
  }
`;

// @media (max-width: 1024px) {
//     .titleContainer {
//       font-size: 0.7rem;
//     }
//   }

//   @media (max-width: 425px) {
//     footer p {
//       font-size: 1rem;
//     }
//   }

//   @media (max-width: 375px) {
//     footer p {
//       font-size: 0.8rem;
//     }
//   }

//   @media (max-width: 320px) {
//     footer p {
//       font-size: 0.7rem;
//     }
//   }

// #B3001B
// #255C99
// #7EA3CC
