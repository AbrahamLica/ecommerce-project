import * as C from "./AppStyles";
import user from '../../imgs/user.svg'
import cart from '../../imgs/cart.svg'
import logo from '../../imgs/logo.png'
import info from '../../imgs/info.svg'
import github from '../../imgs/github.svg'
import { Context } from "../../Context/Context";
import { useContext } from "react";

const Header = () => {
  const { state, dispatch } = useContext(Context);

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

  return (
    <C.MainContainer>
      <C.Container displayFlex alignItems="center">
        <C.Logo src={logo} width="20px"></C.Logo>
        <C.LogoText>Nerd Shop</C.LogoText>
      </C.Container>

      <C.Container displayFlex alignItems="center" justifyContent="center">
        <C.ImgIcons src={info} width="50px"></C.ImgIcons>
        <C.ImgIcons src={github} width="55px"></C.ImgIcons>
        <C.ImgIcons src={user} width="57px"></C.ImgIcons>

        {state.cart.length ? (
          <C.ContainerCart onClick={hideOpenCarrinho}>
            <C.ContainerQtdItemsCart>
              <C.Text color="black">{state.cart.length}</C.Text>
            </C.ContainerQtdItemsCart>
            <C.ImgIcons src={cart} width="56px" ></C.ImgIcons>
          </C.ContainerCart>
        ) : null}
      </C.Container>
    </C.MainContainer>
  );
};

export default Header;
