import './header.css'
import perfil from '../../assets/perfil.jpg'
import { AuthContext } from '../../contexts/auth'
import { useContext } from 'react'
import { Link } from 'react-router-dom'

import { AiFillSignal, AiFillSmile, AiOutlineLoading3Quarters, AiOutlinePoweroff  } from "react-icons/ai";

export default function Header(){
    const { user, deslogar } = useContext(AuthContext)

    return(
        <div className='menu-lateral'>
            <div className='menu-img-fundo'>
                <img src={user.avatarUrl === null ? perfil : user.avatarUrl} alt="foto de perfil do usuário"/>
            </div>

            <h3>{user.nome}</h3>

            <div className='menu-links'>
            <Link to="/dashboard">
                <AiFillSignal color='black' size={20}/>
                Dashboard
            </Link>
            <Link to="/alunos">
                <AiFillSmile color='black' size={20}/>
                Alunos
            </Link>
            </div>  

            <div className='menu-logoff'>
                <button onClick={()=>{deslogar()}}> <AiOutlinePoweroff color='black' size={20}/></button>
                <p>Sair</p>
            </div>
        </div>
    )
}