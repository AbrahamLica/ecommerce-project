import * as C from "./AppStyles";
import close from "../../imgs/close.png";
import bin from "../../imgs/bin2.png";
import confirm from "../../imgs/confirm.png";
import cancel from "../../imgs/cancel.png";
import minus from "../../imgs/minus.png";
import plus from "../../imgs/plus.png";
import { Context } from "../../Context/Context";
import { useContext, useEffect, useState } from "react";

const Carrinho = () => {
  const { state, dispatch } = useContext(Context);
  const [valorTotal, setValorTotal] = useState<any>();
  const [carrinhoAberto, setCarrinhoAberto] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [excludeAll, setExludeAll] = useState(false);
  const [itemToExclude, setItemToExclude] = useState();
  const [qtd, setQtd] = useState();

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

    if (!state.cart.length && state.shop.openCart == true) {
      setCarrinhoAberto(false);
      dispatch({
        type: "CLOSE_CART",
        payload: {
          openCart: false,
        },
      });
    }
  }, [valorTotal, state, carrinhoAberto, state.cart]);

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

  function excludeItem() {
    if (excludeAll == true) {
      dispatch({
        type: "RESET_CARRINHO",
      });
      setExludeAll(false);
    } else if (itemToExclude) {
      dispatch({
        type: "REMOVE_ITEM_FROM_CART",
        payload: {
          id: itemToExclude,
        },
      });
    }

    setShowModal(false);
  }

  function excludeAllItems() {
    setShowModal(true);
    setExludeAll(true);
  }

  function openModal(id: any) {
    setShowModal(true);
    setItemToExclude(id);
  }

  function addQtd() {
    // setQtd(qtd + 1);
  }

  function removeQtd(index: number) {


    dispatch({
      type: "DECREASE_QT",
      payload: {
        pos: index,
        qtdItem: state.cart[index].qtdItem - 1,
      },
    });
  }

  return (
    <C.ContainerCart
      style={{
        width: carrinhoAberto ? "40vw" : "0vw",
        padding: carrinhoAberto ? "20px" : "0px",
      }}
    >
      {showModal && (
        <C.ContainerModal
          style={{
            width: showModal ? "29%" : "0px",
            padding: showModal ? "12px" : "0px",
          }}
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

              <C.Container cursorPointer onClick={() => setShowModal(false)}>
                <img src={cancel} alt="" width={40} />
              </C.Container>
            </C.ContainerButtons>
          </C.Modal>
        </C.ContainerModal>
      )}
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
                <C.ContainerQt>
                  <C.ContainerButton
                    key={index}
                    onClick={() => removeQtd(index)}
                  >
                    <img src={minus} alt="" width={30} />
                  </C.ContainerButton>

                  {/* <C.Text>Quantidade:</C.Text> */}

                  <C.Text fontSize="0.9rem">{item.qtdItem}</C.Text>

                  <C.ContainerButton onClick={addQtd}>
                    <img src={plus} alt="" width={30} />
                  </C.ContainerButton>
                </C.ContainerQt>

                <C.Text fontSize="0.9rem">
                  Valor unitário: R$ {item.valorUnidade}
                </C.Text>

                <C.Text fontSize="0.9rem">
                  Valor final: R$ {item.valorTotal?.toFixed(2)}{" "}
                </C.Text>

                <C.IconDeleteItem
                  src={bin}
                  // onClick={() => openModal(item.id)}
                  onClick={() => console.log(state.cart)}
                />
              </C.Container>
            </C.Container>
          </C.InformationsCartItem>
        </C.ItemsCart>
      ))}

      <C.ContainerValues style={{ display: carrinhoAberto ? "block" : "none" }}>
        <C.Container width="100%">
          <C.Text>Total: R$ {valorTotal}</C.Text>
        </C.Container>

        <C.IconDeleteItem src={bin} onClick={excludeAllItems} />
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
