import { useContext, useState, useEffect } from "react";
import { Context } from "../../Context/Context";
import Header from "../header/Header";
import Items from "../Items/items";
import ModalCompra from "../ModalCompra/ModalCompra";
import ModalDetail from "../ModalDetail/ModalDetail";
import Carrinho from "../Carrinho/Carrinho";
import * as C from "./AppStyles";

const Home = () => {
  const { state, dispatch } = useContext(Context);

  return (
    <C.Container displayFlex>
      <C.MainContainer>
        <Header></Header>

        

        <C.MainContainerItems>
          <C.Title>Os melhores itens Geek você encontra aqui!</C.Title>

          <Items></Items>

          {state.shop.modalOpen ? <ModalCompra></ModalCompra> : null}
          {state.shop.modalDetailOpen ? <ModalDetail></ModalDetail> : null}
        </C.MainContainerItems>

        <C.Container padding="10px">
          <C.Text fontSize="1.2rem" color="black" bold>
            Developed by
            <C.Link
              color="black"
              href="https://github.com/AbrahamLica"
              target="_blank"
              fontSize="1.2rem"
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
