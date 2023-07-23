import { useContext, useEffect, useState } from "react";
import { Context } from "../../Context/Context";
import * as C from "./AppStyles";
import close from "../../imgs/close.png";
import cartBig from "../../imgs/cartBig.png";
import minus from "../../imgs/minus.png";
import plus from "../../imgs/plus.png";
import { addSyntheticLeadingComment } from "typescript";

const ModalCompra = () => {
  const { state, dispatch } = useContext(Context);
  const [value, setValue] = useState(state.shop.value);
  const [qtd, setQtd] = useState(1);
  const [valorFinal, setValorFinal] = useState<number>();
  const [valorFinalFormatado, setValorFinalFormatado] = useState<any>();

  useEffect(() => {
    let resultado: number = qtd * value;
    setValorFinal(resultado);
    setValorFinalFormatado(valorFinal?.toFixed(2));
  }, [qtd, value, valorFinal, valorFinalFormatado]);

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
        id: state.shop.id,
        itemName: state.shop.name,
        qtdItem: qtd,
        valorUnidade: state.shop.value,
        valorTotal: valorFinal,
        src: state.shop.src,
      },
    });

    dispatch({
      type: "CLOSE_MODAL",
      payload: {
        modalOpen: false, 
    }});

    dispatch({
      type: "OPEN_CART",
      payload: {
        openCart: true,
      },
    });

    window.scrollTo(0, 0)
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

        <C.ImgItem src={require(`../../imgs/${state.shop.src}`)} />

        <C.Name>{state.shop.name}</C.Name>
        <C.Value>Valor unidade:R$ {state.shop.value}</C.Value>
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
