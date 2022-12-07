import './signin.css';
import logo from '../../assets/logo.png';

import {useState, useContext} from 'react';
import {Link} from 'react-router-dom';
import {AuthContext} from '../../contexts/auth'
function SignIn() {
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')

  const {login, carregandoAuth} = useContext(AuthContext)
  function aoEnviar(e){
    e.preventDefault()
    
    if(email !== '' && senha !==''){
      login(email, senha)
    }
  }

  return (
    <div className="container-center">
      <div className="login">
        <h1>Bem-vindo ao Portal Educacional</h1>
        <div className="logo">
          <img src={logo} alt="Logo do projeto"/>
        </div>

        <form onSubmit={aoEnviar}>
          <input type="text" placeholder="Digite seu email..." value={email} onChange={ (e) => setEmail(e.target.value)}/>
          <input type="password" placeholder="******" value={senha} onChange={ (e) => setSenha(e.target.value)}/>
          <button type="submit">{carregandoAuth ? '...' : 'Login'}</button>
        </form>

        <p>Não possui cadastro? Registre-se 
        <Link to="/register"> aqui</Link> .
        </p>
      </div>
    </div>
  );
}

export default SignIn;
