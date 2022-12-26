import './Header.css'
import logo from '../../../imgs/logo.svg'
import user from '../../../imgs/user.svg'
import carrinho from '../../../imgs/carrinho.svg'
import coracao from '../../../imgs/coracao.svg'

const Header = () => {
  return (
    <div className='containerHeader'>

        <div className='containerLeft'>
          <img src={logo} alt="" />
        </div>

        <div className='containerRight'>
          <img src={user} alt="" />
          <img src={coracao} alt="" />
          <img src={carrinho} alt="" />
        </div>

    </div>
  )
}

export default Header