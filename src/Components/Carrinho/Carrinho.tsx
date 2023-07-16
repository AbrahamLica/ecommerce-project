import * as C from "./AppStyles";
import close from "../../imgs/close.png";
import bin from "../../imgs/bin2.png";
import { Context } from "../../Context/Context";
import { useContext, useEffect, useState } from "react";

const Carrinho = () => {
  const { state, dispatch } = useContext(Context);
  const [valorTotal, setValorTotal] = useState<any>();
  const [carrinhoAberto, setCarrinhoAberto] = useState(false);

  useEffect(() => {
    var soma: any = 0;
    for (let i = 0; i < state.cart.length; i++) {
      soma += state.cart[i].valorTotal;
    }
    setValorTotal(soma.toFixed(2));

    if (state.shop.openCart == true) {
      setCarrinhoAberto(true);
    } else if (state.shop.openCart == false) {
      setCarrinhoAberto(false);
    }
  }, [valorTotal, state, carrinhoAberto]);

  function calcular() {
    var soma: any = 0;
    for (let i = 0; i < state.cart.length; i++) {
      soma += state.cart[i].valorTotal;
    }
    setValorTotal(soma);
  }

  function closeCart() {
    dispatch({
      type: "CLOSE_CART",
      payload: {
        openCart: false,
      },
    });

    dispatch({
      type: "RESET_CARRINHO",
    });

    alert("Obrigado pela preferência!");

    setCarrinhoAberto(false);
  }

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
    <C.ContainerCart
      style={{
        width: carrinhoAberto ? "40vw" : "0vw",
        padding: carrinhoAberto ? "20px" : "0px",
      }}
    >
      <C.ContainerImgClose
        style={{ display: carrinhoAberto ? "flex" : "none" }}
      >
        <C.ImgClose src={close} onClick={hideOpenCarrinho} />
      </C.ContainerImgClose>

      {state.cart.map((item, index) => (
        <C.ItemsCart style={{ display: carrinhoAberto ? "flex" : "none" }}>
          <C.InformationsCartItem>
            <C.Container width="100%" displayFlex column alignItems="center">
              <C.ImgCartItem src={require(`../../imgs/${item.src}`)} />
              <C.Text textAlign="center">{item.itemName}</C.Text>
            </C.Container>

            <C.Container width="100%">
              <C.Container width="100%" margin="10px 0px">
                <C.Text fontSize="0.9rem">Quantidade: {item.qtdItem}</C.Text>

                <C.Text fontSize="0.9rem">
                  Valor unitário: R$ {item.valorUnidade}
                </C.Text>

                <C.Text fontSize="0.9rem">
                  Valor final: R$ {item.valorTotal?.toFixed(2)}{" "}
                </C.Text>

                <C.IconDeleteItem src={bin} />
              </C.Container>
            </C.Container>
          </C.InformationsCartItem>
        </C.ItemsCart>
      ))}

      <C.ContainerValues style={{ display: carrinhoAberto ? "block" : "none" }}>
        <C.Container width="100%">
          <C.Text>Total: R$ {valorTotal}</C.Text>
        </C.Container>
      </C.ContainerValues>

      <C.ButtonFinish
        style={{ display: carrinhoAberto ? "block" : "none" }}
        onClick={closeCart}
      >
        Finalizar Compra
      </C.ButtonFinish>
    </C.ContainerCart>
  );
};

export default Carrinho;
