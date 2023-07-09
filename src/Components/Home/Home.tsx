import { useContext, useState, useEffect } from "react";
import { Context } from "../../Context/Context";
import Header from "../header/Header";
import Items from "../Items/items";
import ModalCompra from "../ModalCompra/ModalCompra";
import Carrinho from "../Carrinho/Carrinho";
import * as C from "./AppStyles";

const Home = () => {
  const { state, dispatch } = useContext(Context);

  return (
    <C.Container displayFlex>
      <C.MainContainer>
        <Header></Header>

        <C.MainContainerItems>
          <C.TitleContainer>
            <C.Text>Os melhores itens Geek você encontra aqui!</C.Text>
          </C.TitleContainer>

          <Items></Items>

          {state.shop.modalOpen ? <ModalCompra></ModalCompra> : null}
        </C.MainContainerItems>

        <C.Container padding="10px">
          <C.Text fontSize="30px" color="black" bold>
            Developed by
            <C.Link
              color="white"
              href="https://github.com/AbrahamLica"
              target="_blank"
            >
              Abraham Melquisedeque Pereira Licá
            </C.Link>
          </C.Text>
        </C.Container>
      </C.MainContainer>

      <Carrinho></Carrinho>
    </C.Container>
  );
};

export default Home;
