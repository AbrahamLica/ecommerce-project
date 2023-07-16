import * as C from "./AppStyles";
import cart from "../../imgs/cart.svg";
import logo from "../../imgs/logo.png";
import info from "../../imgs/info.svg";
import github from "../../imgs/github.svg";
import me from "../../imgs/me.jpeg";
import React from "react";
import { Context } from "../../Context/Context";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const { state, dispatch } = useContext(Context);
  const [infoHover, setInfoHover] = useState(false);
  const usenavigate = useNavigate();

  function hideOpenCarrinho() {
    if (state.shop.openCart == true) {
      dispatch({
        type: "CLOSE_CART",
        payload: {
          openCart: false,
        },
      });
    } else {
      dispatch({
        type: "OPEN_CART",
        payload: {
          openCart: true,
        },
      });
    }
  }

  function redirect() {
    window.open('https://github.com/AbrahamLica', '_blank')
  }

  function teste() {

  }

  return (
    <C.MainContainer>
      <C.Container displayFlex alignItems="center">
        <C.Logo src={logo} width="20px"></C.Logo>
        <C.LogoText>Nerd Shop</C.LogoText>
      </C.Container>

      <C.Container displayFlex alignItems="center" justifyContent="center">
        <C.BannerHover
          style={{
            display: infoHover ? "flex" : "none",
            right: state.shop.openCart ? '650px' : '120px'
          }}
        >
          <C.Text fontSize="0.8rem" textAlign="center">
            Criado por: Abraham Licá
          </C.Text>
          <img src={me} alt="" width={120} />
        </C.BannerHover>
        <C.ImgIcons
          onMouseOver={() => setInfoHover(true)}
          onMouseOut={() => setInfoHover(false)}
          src={info}
          width="50px"
        ></C.ImgIcons>

        

        <C.Container onClick={redirect}>
          <C.ImgIcons src={github} width="55px"></C.ImgIcons>
        </C.Container>

        {state.cart.length ? (
          <C.ContainerCart onClick={hideOpenCarrinho}>
            <C.ContainerQtdItemsCart>
              <C.Text color="black">{state.cart.length}</C.Text>
            </C.ContainerQtdItemsCart>
            <C.ImgIcons src={cart} width="56px"></C.ImgIcons>
          </C.ContainerCart>
        ) : null}
      </C.Container>
    </C.MainContainer>
  );
};

export default Header;
