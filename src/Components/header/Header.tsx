import logo from "../../imgs/logo.png";
import user from "../../imgs/user.png";
import cart from "../../imgs/carrinho.png";
import hearth from "../../imgs/coracao.png";
import { Context } from "../../Context/Context";
import { useContext } from "react";
import * as C from "./AppStyles";

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
      <C.Container>
        <C.Logo src={logo}></C.Logo>
      </C.Container>

      <C.Container displayFlex alignItems="center" justifyContent="center">
        <C.ImgUser src={user}></C.ImgUser>
        <C.ImgHearth src={hearth}></C.ImgHearth>

        {state.cart.length ? (
          <C.ContainerCart onClick={hideOpenCarrinho}>
            <C.ContainerQtdItemsCart>
              <C.Text color="black">{state.cart.length}</C.Text>
            </C.ContainerQtdItemsCart>
            <C.ImgCart src={cart}></C.ImgCart>
          </C.ContainerCart>
        ) : null}
      </C.Container>
    </C.MainContainer>
  );
};

export default Header;
