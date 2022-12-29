import "./Carrinho.css";
import { Context } from "../../Context/Context";
import { useContext, useEffect, useState } from "react";

const Carrinho = () => {
  const { state, dispatch } = useContext(Context);
  const [valorTotal, setValorTotal] = useState<any>();
  const [valorTotalFormatado, setvalorTotalFormatado] = useState<any>();
  const [testee, setTestee] = useState(false)

  useEffect(() => {
    var soma: any = 0;
    for (let i = 0; i < state.cart.length; i++) {
      soma += state.cart[i].valorTotal;
    }
    setValorTotal(soma.toFixed(2));

    if (state.shop.openCart == true) {
      setTestee(true)
    }
    
  }, [valorTotal, state, testee]);

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
      type: 'RESET_CARRINHO'
    })

    alert('Obrigado pela preferência!')

    setTestee(false)
  }

  function teste() {
    console.log(state.cart);
  }

  return (
    <div className={testee ? 'containerCarrinhoAberto': 'containerCarrinhoFechado'}>
      <h1>Carrinho</h1>

      {state.cart.map((item, index) => (
        <div className="itemCarrinho">
          <div className="informationsItemCarrinho">
            <img src={require(`${item.src}`)} alt="" className="imgItemCarrinho" />
            <div className="containerQtdValorItemCarrinho">
              <p className="nameItemCarrinho">{item.itemName}</p>
              <p className="qtdItemCarrinho">Quantidade: {item.qtdItem}</p>
              <p className="valorItemCarrinho">Valor: R$ {item.valorTotal} </p>
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
