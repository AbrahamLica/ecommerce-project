import "./ModalCompra.css";
import { useContext, useEffect, useState } from "react";
import { Context } from "../../Context/Context";
import ReactModal from 'react-modal'

const ModalCompra = () => {
  const { state, dispatch } = useContext(Context);
  const [name, setName] = useState(state.shop.array[state.shop.pos].name);
  const [src, setSrc] = useState(state.shop.array[state.shop.pos].src);
  const [valor, setValor] = useState(state.shop.array[state.shop.pos].valor);
  const [qtd, setQtd] = useState(1)
  const [teste, setTeste] = useState(valor)
  const [valorFinal, setValorFinal] = useState<number>()
  const [valorFinalFormatado, setValorFinalFormatado] = useState<any>()

  useEffect(() => {
    let resultado: number = qtd * valor
    setValorFinal(resultado)
    setValorFinalFormatado(valorFinal?.toFixed(2))
    setTeste(qtd * valor)
  }, [qtd, valor, valorFinal, valorFinalFormatado])

  function addQtd() {
    setQtd(qtd + 1)
  }

  function removeQtd() {
    if (qtd > 1) {
      setQtd(qtd - 1)
    }
  }

  function fechaModal() {
    dispatch({
      type: 'CLOSE_MODAL',
      payload: {
        modalOpen: false
      }
    })
  }

  function adicionarAoCarrinho() {
    dispatch({
      type: 'ADD_ITEM_TO_CART',
      payload: {
        itemName: name,
        qtdItem: qtd,
        valorTotal: valorFinal,
        src: src
      }
    })

    dispatch({
      type: 'OPEN_CART',
      payload: {
        openCart: true
      }
    })

    fechaModal()
  }



  return (

    <ReactModal isOpen={state.shop.modalOpen} closeTimeoutMS={300} className='containerModalCarrinhoAberto'>
      <div className="modalCarrinho">
        <img src={require(`${src}`)} alt="" className="imgItem" />
        <p className="name">{name}</p>
        <p className="valor">Preço: R$ {valorFinalFormatado}</p>
        <div className="containerQt">
          <button onClick={removeQtd}>-</button>
          <p>{qtd}</p>
          <button onClick={addQtd}>+</button>
        </div>

        <div className="containerButtons">
          <button onClick={adicionarAoCarrinho}>Adicionar ao carrinho</button>
          <button onClick={fechaModal}>Cancelar</button>
        </div>

      </div>
    </ReactModal>
  );

};

export default ModalCompra;
