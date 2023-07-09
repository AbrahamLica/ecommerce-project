import { useContext, useEffect, useState } from "react";
import { Context } from "../../Context/Context";
import * as C from "./AppStyles";
import close from "../../imgs/close.png";

const ModalCompra = () => {
  const { state, dispatch } = useContext(Context);
  const [name, setName] = useState(state.shop.array[state.shop.pos].name);
  const [src, setSrc] = useState(state.shop.array[state.shop.pos].src);
  const [valor, setValor] = useState(state.shop.array[state.shop.pos].valor);
  const [qtd, setQtd] = useState(1);
  const [valorFinal, setValorFinal] = useState<number>();
  const [valorFinalFormatado, setValorFinalFormatado] = useState<any>();

  useEffect(() => {
    let resultado: number = qtd * valor;
    setValorFinal(resultado);
    setValorFinalFormatado(valorFinal?.toFixed(2));
  }, [qtd, valor, valorFinal, valorFinalFormatado]);

  function addQtd() {
    setQtd(qtd + 1);
  }

  function removeQtd() {
    if (qtd > 1) {
      setQtd(qtd - 1);
    }
  }

  function adicionarAoCarrinho() {

    dispatch({
      type: "ADD_ITEM_TO_CART",
      payload: {
        itemName: name,
        qtdItem: qtd,
        valorTotal: valorFinal,
        src: src,
      },
    });

    dispatch({
      type: "CLOSE_MODAL",
      payload: {
        modalOpen: false,
      },
    });

    dispatch({
      type: "OPEN_CART",
      payload: {
        openCart: true,
      },
    });

  }

  function fechaModal() {
    dispatch({
      type: "CLOSE_MODAL",
      payload: {
        modalOpen: false,
      },
    });
  }

  return (
    <C.ContainerModal>
      <C.Modal>
        <C.ContainerClose>
          <img src={close} className="closeImg" onClick={fechaModal} />
        </C.ContainerClose>

        <img src={require(`../../imgs/${src}`)} alt="" className="imgItem" />

        <C.Name className="name">{name}</C.Name>
        <C.Value className="valor">Preço: R$ {valorFinalFormatado}</C.Value>

        <C.ContainerQt>
          <C.Button onClick={removeQtd}>-</C.Button>
          <C.Text>{qtd}</C.Text>
          <C.Button onClick={addQtd}>+</C.Button>
        </C.ContainerQt>

        <C.ContainerButtons>
          <C.Button
            fontSize="20px"
            padding="5px"
            margin="0px 10px"
            onClick={adicionarAoCarrinho}
          >
            Add ao carrinho
          </C.Button>
          <C.Button
            fontSize="20px"
            padding="5px"
            margin="0px 10px"
            onClick={fechaModal}
          >
            Cancelar
          </C.Button>
        </C.ContainerButtons>
      </C.Modal>
    </C.ContainerModal>
  );
};

export default ModalCompra;
