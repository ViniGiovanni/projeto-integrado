
import logo from '../../assets/logo.png';

import {useState, useContext} from 'react';
import {Link} from 'react-router-dom';
import { AuthContext } from '../../contexts/auth'

function SignUp() {
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [nome, setNome] = useState('')

  const { cadastrar, carregandoAuth } = useContext(AuthContext)

  function aoEnviar(e){
    e.preventDefault()
    
    if(nome !== '' && email !== '' && senha !==''){
      cadastrar(email, senha, nome)
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
          <input type="text" placeholder="Digite seu nome..." value={nome} onChange={ (e) => setNome(e.target.value)}/>
          <input type="text" placeholder="Digite seu email..." value={email} onChange={ (e) => setEmail(e.target.value)}/>
          <input type="password" placeholder="******" value={senha} onChange={ (e) => setSenha(e.target.value)}/>
          <button type="submit">{carregandoAuth ? '...' : 'Criar conta'}</button>
        </form>

        <p>Já possui uma conta?
          <Link to="/"> Entre aqui</Link> .
        </p>
      </div>
    </div>
  );
}

export default SignUp;
