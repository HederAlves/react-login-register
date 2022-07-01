import { useState } from "react";

import loginIMG from "../src/assets/login-image.png";

import "./styles.css";

function App() {
  //criando os status 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //por padrão ele não altera diretamente o valor da variável ele recebe o valor no set e repassa para váriavel declarada 

  return (
    <div className="container">
      <div className="container-login">
        
        <div className="wrap-login">
          <form className="login-form">
            <h1 className="login-form-title"> Bem vindo </h1>
            
            <div className="wrap-input">
              <input
                className={email !== "" ? "has-val input" : "input"}
                type="email"
                value={email}
                //capturando o valor da váriavel
                onChange={(e) => setEmail(e.target.value)}
              />
              <span className="focus-input" data-placeholder="Email"></span>
            </div>

            <div className="wrap-input">
              <input
                //criando uma condição
                //capturando as váriaveis pela class 
                className={password !== "" ? "has-val input" : "input"}
                //if ternário "no caso: se a variável password for diferente de vazio pedimos 
                //para que seja passado as duas classes de CSS para a variável se não, mantém apneas uma a input"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <span className="focus-input" data-placeholder="Password"></span>
            </div>

            <div className="container-login-form-btn">
              <button className="login-form-btn">Login</button>
            </div>

            <div className="text-center">
              <span className="txt1">Não possui conta? </span>
              <a className="txt2" href="#">
                Criar conta
              </a>
            </div>
          </form>
          <img className="image-login" src={loginIMG} alt="Desenho de colaboradores" />
        </div>
      </div>
    </div>
  );
}

export default App;