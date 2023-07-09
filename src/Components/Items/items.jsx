import * as C from "./AppStyles";
import eye from "../../imgs/eye.svg";
import cart from "../../imgs/cart.svg";
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
          <img src={require(`../../imgs/${item.src}`)} width={300} />

          <C.ContainerInformations>
            <C.ItemName>{item.name}</C.ItemName>
            <C.ItemPrice>R$ {item.valor}</C.ItemPrice>
          </C.ContainerInformations>

          <C.ContainerButtons>
            <C.ContainerDetails>
              <C.IconDetails src={eye}></C.IconDetails>
              <C.Text>Detalhes</C.Text>
            </C.ContainerDetails>

            <C.AddCarrinho onClick={() => abrirCompra(index)}>
              <img src={cart} alt="" width={20} />
              <C.Text>Add. ao Carrinho</C.Text>
            </C.AddCarrinho>
          </C.ContainerButtons>
        </C.ContainerItem>
      ))}
    </C.ContainerItems>
  );
};

export default Items;
