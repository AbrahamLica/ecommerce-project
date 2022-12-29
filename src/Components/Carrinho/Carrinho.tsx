import "./Carrinho.css";
import { Context } from "../../Context/Context";
import { useContext, useEffect, useState } from "react";

const Carrinho = () => {
  const { state, dispatch } = useContext(Context);
  const [valorTotal, setValorTotal] = useState<any>();
  const [valorTotalFormatado, setvalorTotalFormatado] = useState<any>();

  useEffect(() => {
    var soma: any = 0;
    for (let i = 0; i < state.cart.length; i++) {
      soma += state.cart[i].valorTotal;
    }
    setValorTotal(soma.toFixed(2));
    // setvalorTotalFormatado()
  }, [valorTotal, state]);

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
  }

  function teste() {
    console.log(state.cart);
  }

  return (
    <div className="containerCarrinho">
      <h1>Carrinho</h1>

      {state.cart.map((item, index) => (
        <div className="itemCarrinho">
          <div className="informationsItemCarrinho">
            <img src={require(`${item.src}`)} alt="" className="imgItemCarrinho" />
            <div className="containerQtdValorItemCarrinho">
              <p className="nameItemCarrinho">{item.itemName}</p>
              <p className="qtdItemCarrinho">Quantidade: {item.qtdItem}</p>
              <p>Valor: R$ {item.valorTotal} </p>
            </div>
          </div>
        </div>
      ))}

      <div className="containerValores">
        <div className="total">
          <h2>Total</h2>
          <h2>R$ {valorTotal}</h2>
        </div>
      </div>

      <button className="btnFinalizar" onClick={closeCart}>Finalizar Compra</button>

    </div>
  );
};

export default Carrinho;
