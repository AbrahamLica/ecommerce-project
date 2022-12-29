import eye from "../../imgs/eye.svg";
import cart from "../../imgs/cart.svg";
import './items.css'
import '../GlobalStyle/index.css'

import { useContext } from "react";
import { Context } from "../../Context/Context";


 const Items = () => {

  const { state, dispatch } = useContext(Context);

  function abrirCompra(index) {
    dispatch({
      type: 'OPEN_MODAL', 
      payload: {
        modalOpen: true,
        pos: index
      }
    })
  }

  return (    

    <div className="itemsContainer">
      {state.shop.array.map((item, index) => (
        <div className="itemContainer" key={index}>

          <img src={require(`${item.src}`)} alt="" className="thumb" />

          <div className="informationsContainer">
            <p className="itemName">{item.name}</p>
            <p className="itemPrice">R$ {item.valor}</p>
          </div>

          <div className="buttonsContainer">
            <div className="detalhes">
              <img src={eye} alt="" />
              <p>Detalhes</p>
            </div>

            <div className="addCarrinho" onClick={() => abrirCompra(index)}>
              <img src={cart} alt="" />
              <p>Add. ao Carrinho</p>
            </div>
          </div>

        </div>
      ))}
    </div>
    
  );
};

export default Items;
