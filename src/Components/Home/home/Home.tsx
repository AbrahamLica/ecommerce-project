import React, { useState } from "react";
import Header from "../header/Header";
import "./Home.css";
import { useContext } from "react";
import { Context } from "../../../Context/Context";
import Items from "../items/items";

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
      </div>
    </div>
  );
};

export default Home;
