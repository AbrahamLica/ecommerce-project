import './Carrinho.css'
import { useContext, useState } from "react";
import { Context } from "../../Context/Context";

const Carrinho = () => {

  const { state, dispatch } = useContext(Context);
  const [name, setName] = useState(state.shop.array[state.shop.pos].name)
  const [src, setSrc] = useState(state.shop.array[state.shop.pos].src)
 

  return (

    <div className='containerModalCarrinho'>
      <div className='modalCarrinho'>
        <img src={require(`${src}`)} alt="" />
        <p>{name}</p>
      </div>
    </div>

  )
}

export default Carrinho