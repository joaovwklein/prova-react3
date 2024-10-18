import Container from "react-bootstrap/esm/Container";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import { useState, useEffect } from "react";

import { useNavigate } from 'react-router-dom';

import styles from './index.module.css'

const url = "http://localhost:3000/usuarios";

const Login = () => {
  const navigate = useNavigate();

  
  // variaveis pro usuario
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  // variaveis pro alerta
  const [alertaClass, setAlertaClass] = useState("mb-3 d-none");
  const [alertaMensagem, setAlertaMensagem] = useState("");
  const [alertaVariant, setAlertaVariant] = useState("danger");

  //Lista de usuarios
  const [usuarios, setUsuarios] = useState([]);

  //Resgate de dados da API
  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(url);
        const users = await res.json();
        setUsuarios(users);
      } catch (error) {
        console.log(error.message);
      }
    }
    fetchData();
    console.log(usuarios);
  }, []);

  const gravarLocalStorage = (usuario) =>{
    localStorage.setItem("userName", usuario.nome)
    localStorage.setItem("userEmail", usuario.email)   
  }

  const handleLogin = async (e) => {
    e.preventDefault();

    const user = { email, senha };

    //Verifica na lista de usuarios se tem o usuario digitado
    const userToFind = usuarios.find(
      (userFind) => userFind.email == user.email
    );

    if (email != "") {
      if (senha != "") {
        if (userToFind != undefined && userToFind.senha == senha) {
          console.log(userToFind);
          console.log("entrou");
          setAlertaClass("mb-3");
          gravarLocalStorage(userToFind)
          // alert("Login efetuado com Sucesso");
          setAlertaMensagem("Login efetuado com Sucesso");
          setAlertaVariant("success");
          
          navigate('/CadastroProdutos')


          




        } else {
          setAlertaClass("mb-3");
          setAlertaMensagem("Usuário ou senha inválidos");
        }
      } else {
        setAlertaClass("mb-3");
        setAlertaMensagem("O campo senha não pode ser vazio");
      }
    } else {
      setAlertaClass("mb-3");
      setAlertaMensagem("O campo email não pode ser vazio");
    }
  };

  return (
    <div>
      <Container>
        <span className={`material-symbols-outlined, `} style={{ fontSize: "100px" }}>
          login
        </span>
        <form onSubmit={handleLogin}>
          {/* caixinha do email */}
          <FloatingLabel
            controlId="floatingInputEmail"
            label="Email"
            className="mb-3"
          >
            <Form.Control
              type="email"
              placeholder="name@example.com"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </FloatingLabel>

          {/* caixinha da senha */}
          <FloatingLabel
            controlId="floatingPassword"
            label="Senha"
            className="mb-3"
          >
            <Form.Control
              type="password"
              placeholder="Password"
              value={senha}
              onChange={(e) => {
                setSenha(e.target.value);
              }}
            />
          </FloatingLabel>

          <Alert key="danger" variant={alertaVariant} className={alertaClass}>
            {alertaMensagem}
          </Alert>

          <Button 
          variant="primary" 
          type="submit"
          className={styles.btnCadastrar}>
            Enviar
          </Button>
        </form>
      </Container>
    </div>
  );
};

export default Login;
