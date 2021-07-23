import {React, useState} from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import swal from 'sweetalert';
import logohc from '../../../src/hiring-coders-logo.png'



export default function EditClient(){
  const element = JSON.parse(localStorage.getItem('editClient')) ? JSON.parse(localStorage.getItem('editClient')): [];
  const clientes = JSON.parse(localStorage.getItem('client')) ? JSON.parse(localStorage.getItem('client')): [];
  const [id, setId] = useState(element.id)
  const [nome, setNome] = useState(element.nome);
  const [email, setEmail] = useState(element.email);
  const [endereco, setEndereco] = useState(element.endereco);
  const history = useHistory();

  const data = {
    id,
    nome,
    email,
    endereco
  }

  function handleEditar(){
    if(validator(nome, email, endereco)){
      
        let index;
        for(let i=0; i<clientes.length;i++){
          if(clientes[i].id === element.id){
            index = i;
          }
        }
        clientes[index] = data;
        localStorage.setItem('client', JSON.stringify(clientes));
        localStorage.setItem('editClient', '');
        history.push('/client');

      
    }
  }

  function validator(nome,categoria, quantidade, preco){
    if((nome !== null && nome !== '') &&
     (categoria !== null && categoria !== '')
      && (quantidade !== null && quantidade !== '')
      && (preco !== null && preco !== '')){
      return true;
    }
    else{
      swal('Prencha todos os campos solicitados!');
      
    }
  }

  return(
    
    <Container fluid className="Container">
      <header>
        <h1>App React - Gestão de Cadastro para Clientes e Produtos</h1>
      </header>
    <Row>
    <Col className="colP" xs={1}>
      <div>
        <Link className='link-ref' to='/'>HOME</Link>
      </div>
      <div>
        <Link className='link-ref' to='/client'>CLIENTES</Link>
      </div>
      <div>
        <Link className='link-ref' to='/product'>PRODUTOS</Link>
      </div>
    </Col>
    <Col xs={8} >
    <main>
      <h1>EDITAR CLIENTE</h1>
      <form>
        <input type="text" placeholder="Nome" id="name" value = {nome} onChange = {e => setNome(e.target.value)}></input>
        <input type="email" placeholder="Email" id="email" value = {email} onChange = {e => setEmail(e.target.value)}></input>
        <input type="text" placeholder="Endereco" id="endereco" value = {endereco} onChange = {e => setEndereco(e.target.value)}></input>
        <div className="botaoAdd"><button type='button' onClick={handleEditar}>CONFIRMAR EDIÇÃO</button></div>
      </form>
    </main>
    </Col>
  </Row>
  <footer>
      <p>
        Projeto desenvolvido para entrega do Desafio:2 - Bootcamp Hiring Coders#2 por:
        Joir Neto /
        <a className='link-ref' href="https://linkedin.com/in/joir-neto"> Linkedin</a> /
        <a className='link-ref' href="https://github.com/joirneto"> Github</a>
      </p>
      <img src={logohc} alt="HC" width="200px" height="auto"></img>
    </footer>
    
    </Container>
  )
}

  