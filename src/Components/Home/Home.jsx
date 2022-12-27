import Header from "../header/Header";
import "./Home.css";
import { useContext } from "react";
import { Context } from "../../Context/Context";
import Items from "../Items/items";
import '../GlobalStyle/index.css'
import Carrinho from "../Carrinho/Carrinho";

const Home = () => {

  const { state, dispatch } = useContext(Context);

  return (
    <div className="htmlContainer">

      <Header></Header>

      <div className="bodyContainer">
        <div className="titleContainer">
          <h1>Os melhores itens Geek você encontra aqui!</h1>
        </div>

        <Items></Items>

        {state.shop.cartOpen ? <Carrinho></Carrinho> : null}

      </div>
    </div>
  );
};

export default Home;
