import "./Carrinho.css";
import { useContext, useEffect, useState } from "react";
import { Context } from "../../Context/Context";

const Carrinho = () => {
  const { state, dispatch } = useContext(Context);
  const [name, setName] = useState(state.shop.array[state.shop.pos].name);
  const [src, setSrc] = useState(state.shop.array[state.shop.pos].src);
  const [valor, setValor] = useState(state.shop.array[state.shop.pos].valor);
  const [qtd, setQtd] = useState(1)
  const [teste, setTeste] = useState(valor)
  

  // function inputSetName(e: ChangeEvent<HTMLInputElement>) {
  //   setName(e.target.value)
  // }

  // useEffect(() => {
  //   removeQtd()
  // }, [])

  // function initialize() {
  //   setTeste(valor * qtd)
  // }

  function addQtd() {
    setQtd(qtd + 1)
  }

  function removeQtd() {
    // if (qtd > 1) {
    //   setQtd(qtd-1)
    //   setTeste(valor * qtd )
    // } else {

    // }

    // setQtd(qtd-1) 
    // setTeste(valor * qtd )
    setTeste(valor * qtd)
      
  }

  function testeee() {
    console.log('valor qtd:' + qtd)
    console.log('resultado de ' + qtd + ' * ' + valor + ' = ' + teste)
  }

  return (
    <div className="containerModalCarrinho">

      <div className="modalCarrinho">
        <img src={require(`${src}`)} alt="" className="imgItem" />
        <p className="name">{name}</p>
        <p className="valor">Preço: {teste}</p>
        <div className="containerQt">
          <button onClick={removeQtd}>-</button>
          <p>{qtd}</p>
          <button onClick={addQtd}>+</button>
        </div>

        <div className="containerButtons">
          <button onClick={testeee}>Adicionar ao carrinho</button>
          <button>Cancelar</button>
        </div>

      </div>

    </div>
  );
};

export default Carrinho;
