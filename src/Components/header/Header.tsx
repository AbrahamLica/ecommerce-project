import "./Header.css";
import logo from "../../imgs/logo.png";
import user from "../../imgs/user.png";
import carrinho from "../../imgs/carrinho.png";
import coracao from "../../imgs/coracao.png";
import "../GlobalStyle/index.css";
import { Context } from "../../Context/Context";
import { useContext } from "react";

const Header = () => {
  const { state, dispatch } = useContext(Context);

  function hideOpenCarrinho() {
    if (state.shop.openCart == true) {
      dispatch({
        type: 'CLOSE_CART',
        payload: {
          openCart: false
        }
      })
    } else {
      dispatch({
        type: 'OPEN_CART',
        payload: {
          openCart: true
        }
      })
    }  
  }

  return (
    <div className="containerHeader">
      <div className="containerLeft">
        <img src={logo} alt="" />
      </div>

      <div className="containerRight">
        <img src={user} alt="" className="imgUser" />
        <img src={coracao} alt="" className="imgCoracao" />
        {state.cart.length ? (
          <div className="containerCarrinho" onClick={hideOpenCarrinho}>
            <div className="bolinha">
              <p>{state.cart.length}</p>
            </div>
            <img src={carrinho} alt="" className="imgCarrinho" />
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Header;
