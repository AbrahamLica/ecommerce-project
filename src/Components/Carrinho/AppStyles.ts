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
  display: none;
  padding: 10px;
  width: 100%;
  margin-top: 10px;
  margin-bottom: 10px;
  border-bottom: 5px solid black;
`;

export const InformationsCartItem = styled.div<ContainerProps>`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  margin-left: 5px;
  padding: 10px;
  width: 100%;
`;

export const ImgCartItem = styled.img<ContainerProps>`
  height: 100px;
  max-width: 80px;
`;

export const ContainerDescription = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  justify-content: space-between;
`;

export const ItemName = styled.p<ContainerProps>`
  font-weight: bold;
  font-size: 19px;
  text-align: center;
  margin-bottom: 20px;
`;

export const ContainerValues = styled.p<ContainerProps>`
  margin-top: 10px;
  margin-bottom: 50px;
  width: 100%;
`;

export const ButtonFinish = styled.button<ContainerProps>`
  width: 80%;
  font-size: 30px;
  padding: 5px;
  border-radius: 10px;
  background-color: black;
  border: none;
  cursor: pointer;
  color: white;
  font-weight: bold;
`;


