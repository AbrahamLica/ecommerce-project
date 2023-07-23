import * as C from "./AppStyles";
import close from "../../imgs/close.png";
import bin from "../../imgs/bin2.png";
import confirm from "../../imgs/confirm.png";
import cancell from "../../imgs/cancel.png";
import minus from "../../imgs/minus.png";
import plus from "../../imgs/plus.png";
import { Context } from "../../Context/Context";
import { useContext, useEffect, useState } from "react";
import { match } from "assert";
import styled from "styled-components";

const Carrinho = () => {
  const { state, dispatch } = useContext(Context);
  const [valorTotal, setValorTotal] = useState<number>();
  const [showModal, setShowModal] = useState<boolean>(false);
  const [excludeAll, setExludeAll] = useState<boolean>(false);
  const [itemToExclude, setItemToExclude] = useState();
  const [teste, setTeste] = useState<number>(1);
  const [sizeSmallandOpen, setSizeSmallandOpen] = useState();

  useEffect(() => {
    let valor = 0;
    for (let i = 0; i < state.cart.length; i++) {
      valor = state.cart[i].qtdItem * state.cart[i].valorUnidade;
      dispatch({
        type: "RECALC",
        payload: {
          pos: i,
          valorTotal: valor,
        },
      });
    }

    calcTotalValue();
  }, [state.shop.openCart, teste, valorTotal, state.cart.length]);

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

    setExludeAll(false);

    alert("Obrigado pela preferência!");
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

  function excludeItem() {
    if (excludeAll == true) {
      dispatch({
        type: "RESET_CARRINHO",
      });
      dispatch({
        type: "CLOSE_CART",
        payload: {
          openCart: false,
        },
      });
      setExludeAll(false);
    } else if (itemToExclude && state.cart.length == 1) {
      dispatch({
        type: "REMOVE_ITEM_FROM_CART",
        payload: {
          id: itemToExclude,
        },
      });
      dispatch({
        type: "CLOSE_CART",
        payload: {
          openCart: false,
        },
      });
    } else {
      dispatch({
        type: "REMOVE_ITEM_FROM_CART",
        payload: {
          id: itemToExclude,
        },
      });
    }

    setShowModal(false);
    setExludeAll(false);
  }

  function excludeAllItems() {
    setShowModal(true);
    setExludeAll(true);
  }

  function openModal(id: any) {
    setShowModal(true);
    setItemToExclude(id);
  }

  function decreaseQtd(index: number) {
    if (state.cart[index].qtdItem > 1) {
      dispatch({
        type: "DECREASE_QT",
        payload: {
          pos: index,
          qtdItem: state.cart[index].qtdItem - 1,
        },
      });
    }
    setTeste(teste + 1);

    setTimeout(() => {
      calcTotalValue();
    }, 100);
  }

  function increaseQtd(index: number) {
    dispatch({
      type: "INCREASE_QT",
      payload: {
        pos: index,
        qtdItem: state.cart[index].qtdItem + 1,
      },
    });
    setTeste(teste + 1);

    setTimeout(() => {
      calcTotalValue();
    }, 100);
  }

  function calcTotalValue() {
    var soma: any = 0;
    for (let i = 0; i < state.cart.length; i++) {
      soma += state.cart[i].valorTotal;
    }
    setValorTotal(soma.toFixed(2));
  }

  function cancel() {
    setShowModal(false);
    setExludeAll(false);
  }

  return (
    <C.ContainerCart
      width={state.shop.openCart ? "cartopen" : ""}
      padding={state.shop.openCart ? "cartopen" : ""}
    >
      {showModal && (
        <C.ContainerModal
          width={showModal ? "showModal" : ""}
          padding={showModal ? "showModal" : ""}
        >
          <C.Modal>
            <C.Text textAlign="center" fontSize="0.8rem">
              {excludeAll
                ? "Tem certeza que deseja excluir todos os items do carrinho?"
                : "Tem certeza que deseja excluir este item?"}
            </C.Text>
            <C.ContainerButtons>
              <C.Container cursorPointer onClick={excludeItem}>
                <img src={confirm} alt="" width={35} />
              </C.Container>

              <C.Container cursorPointer onClick={cancel}>
                <img src={cancell} alt="" width={40} />
              </C.Container>
            </C.ContainerButtons>
          </C.Modal>
        </C.ContainerModal>
      )}
      <C.ContainerImgClose
        style={{ display: state.shop.openCart ? "flex" : "none" }}
      >
        <C.ImgClose src={close} onClick={hideOpenCarrinho} />
      </C.ContainerImgClose>

      {state.cart.map((item, index) => (
        <C.ItemsCart style={{ display: state.shop.openCart ? "flex" : "none" }}>
          <C.InformationsCartItem>
            <C.Container width="100%" displayFlex column alignItems="center">
              <C.ImgCartItem src={require(`../../imgs/${item.src}`)} />
              <C.Text textAlign="center">{item.itemName}</C.Text>
            </C.Container>

            <C.Container width="100%">
              <C.Container width="100%" margin="10px 0px">
                <C.Text fontSize="0.9rem">
                  Valor unitário: R$ {item.valorUnidade}
                </C.Text>

                <C.Text fontSize="0.9rem">
                  Valor final: R$ {item.valorTotal?.toFixed(2)}
                </C.Text>

                <C.Container
                  width="100%"
                  displayFlex
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <C.IconDeleteItem
                    src={bin}
                    onClick={() => openModal(item.id)}
                  />

                  <C.ContainerQt>
                    <C.ContainerButton onClick={() => decreaseQtd(index)}>
                      <img src={minus} alt="" width={30} />
                    </C.ContainerButton>

                    <C.Text fontSize="0.9rem" margin="0px 5px 0px 5px">
                      {item.qtdItem}
                    </C.Text>

                    <C.ContainerButton
                      key={index}
                      onClick={() => increaseQtd(index)}
                    >
                      <img src={plus} alt="" width={30} />
                    </C.ContainerButton>
                  </C.ContainerQt>
                </C.Container>
              </C.Container>
            </C.Container>
          </C.InformationsCartItem>
        </C.ItemsCart>
      ))}

      <C.Container
        width="100%"
        style={{ display: state.shop.openCart ? "block" : "none" }}
      >
        <C.Container width="100%">
          <C.Text>Total: R$ {valorTotal}</C.Text>
        </C.Container>

        <C.IconDeleteItem src={bin} onClick={excludeAllItems} />
      </C.Container>

      <C.ButtonFinish
        style={{ display: state.shop.openCart ? "block" : "none" }}
        onClick={closeCart}
      >
        Finalizar Compra
      </C.ButtonFinish>
    </C.ContainerCart>
  );
};

export default Carrinho;
