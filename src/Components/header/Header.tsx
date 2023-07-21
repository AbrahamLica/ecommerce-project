import * as C from "./AppStyles";
import cart from "../../imgs/cart.svg";
import logo from "../../imgs/logo.png";
import info from "../../imgs/info.svg";
import github from "../../imgs/github.svg";
import me from "../../imgs/me.jpeg";
import React from "react";
import menu from "../../imgs/menu.svg";
import close from "../../imgs/close.png";
import close2 from "../../imgs/close2.svg";
import insta from "../../imgs/insta.png";
import github2 from "../../imgs/github2.png";
import { Context } from "../../Context/Context";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const { state, dispatch } = useContext(Context);
  const [infoHover, setInfoHover] = useState(false);
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [perfilShow, setPerfilShow] = useState<boolean>(false);
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

  function redirect(site: string) {
    window.open(site, "_blank");
  }

  function showMenuu() {
    if (showMenu == false) {
      setShowMenu(true);
    } else if (showMenu == true) {
      setShowMenu(false);
    }
  }

  function showInfoMenu() {
    if (perfilShow == true) {
      setPerfilShow(false);
    } else if (perfilShow == false) {
      setPerfilShow(true);
    }
  }

  return (
    <C.MainContainer>
      <C.ContainerHeader>
        <C.Container displayFlex alignItems="center">
          <C.Logo src={logo} width="20px"></C.Logo>
          <C.LogoText>Nerd Shop</C.LogoText>
        </C.Container>

        <C.IconMenuHamburguer src={menu} onClick={showMenuu} />

        <C.ContainerMenu
          style={{
            height: showMenu ? "100vh" : "0vw",
          }}
        >
          <C.Container width="100%" displayFlex justifyContent="flex-end">
            <C.IconClose
              width="60px"
              top="0"
              src={close2}
              onClick={showMenuu}
            />
          </C.Container>
          <C.Container
            width="100%"
            heigth="50%"
            displayFlex
            column
            alignItems="center"
            justifyContent="space-between"
          >
            <C.ContainerPerfil
              style={{
                display: perfilShow ? "flex" : "none",
              }}
            >
              <C.IconClose
                src={close}
                width="35px"
                top="5px"
                left="260px"
                onClick={showInfoMenu}
              ></C.IconClose>
              <C.Text textAlign="center">Criado por: Abraham Licá</C.Text>
              <C.Img width="150px" src={me}></C.Img>
              <C.Container
                displayFlex
                alignItems="center"
                justifyContent="space-between"
                width="150px"
                margin="10px 0px"
              >
                <C.Img
                  src={insta}
                  width="40px"
                  cursorPointer
                  onClick={() => redirect("https://instagram.com/euabraham_/")}
                ></C.Img>
                <C.Img
                  src={github2}
                  width="40px"
                  cursorPointer
                  onClick={() => redirect("https://github.com/AbrahamLica")}
                ></C.Img>
              </C.Container>
            </C.ContainerPerfil>

            <C.Img
              width={"100px"}
              src={info}
              style={{
                display: showMenu ? "block" : "none",
              }}
              onClick={showInfoMenu}
            ></C.Img>
            <C.Img
              width={"100px"}
              src={github}
              style={{
                display: showMenu ? "block" : "none",
              }}
              onClick={() => redirect("https://github.com/AbrahamLica")}
              cursorPointer
            ></C.Img>
          </C.Container>
        </C.ContainerMenu>
      </C.ContainerHeader>

      <C.ContainerIcons>
        <C.BannerHover
          style={{
            display: infoHover ? "flex" : "none",
            right: state.shop.openCart ? "650px" : "120px",
          }}
        >
          <C.Text fontSize="0.8rem" textAlign="center">
            Criado por: Abraham Licá
          </C.Text>
          <img src={me} alt="" width={120} />
        </C.BannerHover>

        <C.IconInfo
          onMouseOver={() => setInfoHover(true)}
          onMouseOut={() => setInfoHover(false)}
          src={info}
        ></C.IconInfo>

        <C.IconGithub
          src={github}
          onClick={() => redirect("https://github.com/AbrahamLica")}
        ></C.IconGithub>

        {state.cart.length ? (
          <C.ContainerCart
            onClick={hideOpenCarrinho}
            width={state.cart.length ? "50%" : "0"}
          >
            <C.ContainerQtdItemsCart>
              <C.Text color="black">{state.cart.length}</C.Text>
            </C.ContainerQtdItemsCart>
            <C.IconCart src={cart}></C.IconCart>
          </C.ContainerCart>
        ) : null}
      </C.ContainerIcons>
    </C.MainContainer>
  );
};

export default Header;
