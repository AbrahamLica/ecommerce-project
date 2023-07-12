import * as C from "./AppStyles";
import eye from "../../imgs/eye.svg";
import cartItems from "../../imgs/cartItems.png";
import { useContext } from "react";
import { Context } from "../../Context/Context";

const Items = () => {
  const { state, dispatch } = useContext(Context);

  function abrirCompra(index) {
    dispatch({
      type: "OPEN_MODAL",
      payload: {
        modalOpen: true,
        pos: index,
      },
    });

    console.log(state.shop);
  }

  return (
    <C.ContainerItems>
      {state.shop.array.map((item, index) => (
        <C.ContainerItem key={index}>
          <C.ItemImg src={require(`../../imgs/${item.src}`)} />

          <C.ContainerInformations>
            <C.Container
              displayFlex
              justifyContent="center"
              alignItems="flex-start"
              heigth="80%"
              width="100%"
            >
              <C.ItemName>{item.name}</C.ItemName>
            </C.Container>

            <C.Container>
              <C.ItemPrice>R$ {item.valor}</C.ItemPrice>
            </C.Container>
          </C.ContainerInformations>

          <C.ContainerButtons>
            <C.ContainerDetails>
              <img src={eye} alt="" width={50} />
            </C.ContainerDetails>

            <C.AddCarrinho onClick={() => abrirCompra(index)}>
              <img src={cartItems} alt="" width={40} />
            </C.AddCarrinho>
          </C.ContainerButtons>
        </C.ContainerItem>
      ))}
    </C.ContainerItems>
  );
};

export default Items;
