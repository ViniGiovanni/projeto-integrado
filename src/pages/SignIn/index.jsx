import './signin.css';
import fundo from '../../assets/fundo.jpg';
import logo from '../../assets/logo.png';

import {useState} from 'react';
import {Link} from 'react-router-dom';

function SignIn() {
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')

  return (
    <div className="container-center">
      <div className="login">
        <h1>Bem-vindo ao Portal Educacional</h1>
        <div className="logo">
          <img src={logo} alt="Logo do projeto"/>
        </div>
        <form>
          <input type="text" placeholder="Digite seu email..."/>
          <input type="password" placeholder="******"/>
          <button type="submit">Login</button>
        </form>

        <p>Não possui cadastro? Registre-se 
        <Link to="/register"> aqui</Link>
        </p>
      </div>
    </div>
  );
}

export default SignIn;
