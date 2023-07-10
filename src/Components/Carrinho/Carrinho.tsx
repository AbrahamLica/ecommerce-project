import * as C from "./AppStyles";
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
            <C.ImgCartItem src={require(`../../imgs/${item.src}`)} />

            <C.ContainerDescription>
              <C.ItemName>{item.itemName}</C.ItemName>

              <C.Container>
                <C.Text fontSize="20px" textAlign="center">
                  Quantidade: {item.qtdItem}
                </C.Text>
                <C.Text fontSize="20px" textAlign="center">
                  Valor unitário: R$ {item.valorUnidade}
                </C.Text>
                <C.Text fontSize="20px" textAlign="center">
                  Valor final: R$ {item.valorTotal?.toFixed(2)}{" "}
                </C.Text>
              </C.Container>
            </C.ContainerDescription>
          </C.InformationsCartItem>
        </C.ItemsCart>
      ))}

      <C.ContainerValues style={{ display: carrinhoAberto ? "block" : "none" }}>
        <C.Container displayFlex justifyContent="space-around" width="100%">
          <C.Text fontSize="20px">Total: </C.Text>
          <C.Text fontSize="20px">R$ {valorTotal}</C.Text>
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
