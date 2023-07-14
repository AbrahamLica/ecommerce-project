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

/////////////////////////// HEADER ///////////////////////

export const MainContainer = styled.div<ContainerProps>`
  width: 100%;
  height: 15vh;
  background-color: #0B0A09; 
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LogoText = styled.p<ContainerProps>`
  margin-left: 30px;
  font-size: 30px;
  color: #E6AF2E;
  letter-spacing: 0.8rem;
`;

export const MainContainerItems = styled.div<ContainerProps>`
  background-color: white;
  width: 80%;
`;

export const TitleContainer = styled.div<ContainerProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 20px;
  font-size: 1.3rem;
  text-align: center;
`;

export const Logo = styled.img<ContainerProps>`
  margin-left: 20px;
  width: 65px;
  height: 75px;
`;

export const ImgIcons = styled.img<ContainerProps>`
  width: ${(props) => props.width};
  height: ${(props) => props.heigth};
  margin-left: 20px;
  margin-right: 10px;
  padding: ${(props) => props.padding};
  cursor: pointer;

  :hover {
    transform: scale(2);
  }
`;

export const ContainerCart = styled.div<ContainerProps>`
  display: flex;
  align-items: flex-end;
  justify-content: center;
`;

export const ContainerQtdItemsCart = styled.div<ContainerProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background-color: white;
  text-align: center;
  transform: translateX(22px);
`;

// #E6AF2E
// #E0E2DB
// #0B0A09


// @media (max-width: 425px) {
//     .imgUser {
//       display: none;
//     }

//     .imgCoracao {
//       display: none;
//     }
//   }

// #B3001B
// #255C99
// #7EA3CC
