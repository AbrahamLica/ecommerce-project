import { useContext, useEffect, useState } from "react";
import { Context } from "../../Context/Context";
import * as C from "./AppStyles";
import close from "../../imgs/close.png";
import cartBig from "../../imgs/cartBig.png";
import minus from "../../imgs/minus.png";
import plus from "../../imgs/plus.png";

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
        valorUnidade: valor,
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
          <C.IconClose src={close} onClick={fechaModal} />
        </C.ContainerClose>

        <C.ImgItem src={require(`../../imgs/${src}`)}/>

        <C.Name>{name}</C.Name>
        <C.Value>Valor unidade:R$ {valor}</C.Value>
        <C.Value>Valor final:R$ {valorFinalFormatado}</C.Value>

        <C.ContainerQt>
          <C.ContainerButton onClick={removeQtd}>
            <img src={minus} alt="" width={30} />
          </C.ContainerButton>

          <C.Text margin="10px" fontSize="0.7rem">
            {qtd}
          </C.Text>

          <C.ContainerButton onClick={addQtd}>
            <img src={plus} alt="" width={30} />
          </C.ContainerButton>
        </C.ContainerQt>

        <C.ContainerButtons>
          <C.Button onClick={adicionarAoCarrinho}>
            Adicionar ao carrinho
          </C.Button>

          <C.Button onClick={fechaModal}>Cancelar</C.Button>
        </C.ContainerButtons>
      </C.Modal>
    </C.ContainerModal>
  );
};

export default ModalCompra;
