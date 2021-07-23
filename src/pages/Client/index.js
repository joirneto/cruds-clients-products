import {React, useState} from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';
import excluir from '../../../src/excluir.png'
import edit from '../../../src/edit.png'
import logohc from '../../../src/hiring-coders-logo.png'
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import swal from 'sweetalert';


export default function Client(){
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [endereco, setEndereco] = useState('');
  let lista = JSON.parse(localStorage.getItem('client')) ? JSON.parse(localStorage.getItem('client')): [];
  const history = useHistory();
  
  
  const data = {
    id: uuidv4(),
    nome,
    email,
    endereco
  }

  function handleAdicionar(){
    if(validator(nome, email, endereco)){
      if(localStorage.getItem('client') === null){
        localStorage.setItem('client', JSON.stringify([data]));
        setNome('');
        setEmail('');
        setEndereco('');
        history.push('/client');
      }
      else{
        localStorage.setItem(
          'client',
          JSON.stringify([
            ...JSON.parse(localStorage.getItem('client')),
                data
            ])
          );
          setNome('');
          setEmail('');
          setEndereco('');
          history.push('/client');
        
        }
      
    }
  }

  function validator(nome,email, endereco){
    if((nome !== null && nome !== '') &&
     (email !== null && email !== '')
      && (endereco !== null && endereco !== '')){
      return true;
    }
    else{
      swal('Prencha todos os campos solicitados!');
      
    }
  }

  function editarClient(id){
    let lista = JSON.parse(localStorage.getItem('client'));
    let element = lista.find(element => element.id === id);
    localStorage.setItem('editClient', JSON.stringify(element));
    history.push('/edit-client');
    
 }


  function excluirClient(cliente){

    let index;
    let clientes = JSON.parse(localStorage.getItem('client'));
    for(let i=0; i<clientes.length;i++){
      if(clientes[i].id === cliente.id){
        index = i;
      }
    }
   
 
     lista.splice(index,1);
     localStorage.setItem('client', JSON.stringify(lista));
     history.push('/client');
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
      <h1>CLIENTES</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>NOME</th>
            <th>EMAIL</th>
            <th>ENDEREÇO</th>
            <th>EDITAR PRODUTO</th>
            <th>EXCLUIR PRODUTO</th>
          </tr>
        </thead>
        <tbody>
          {     
            lista.map(client =>{
              return(
                <tr key={`${client.id}`}>
                  <td >{client.nome}</td>
                  <td >{client.email}</td>
                  <td >{client.endereco}</td>
                  <td><img src={edit} alt="Editar" width="60" title="Editar" onClick = {e => editarClient(client.id)} /></td>
                  <td><img src={excluir} alt="Excluir" width="40" title="Excluir" onClick = {e => excluirClient(client)} /></td>
                </tr>
              )
           })
          }
        </tbody>
      </Table>
      <h3>Adicionar Novo Cliente</h3>
      <form>
        <input type="text" placeholder="Nome" id="name" value = {nome} onChange = {e => setNome(e.target.value)}></input>
        <input type="email" placeholder="Email" id="email" value = {email} onChange = {e => setEmail(e.target.value)}></input>
        <input type="text" placeholder="Endereço" id="endereco" value = {endereco} onChange = {e => setEndereco(e.target.value)}></input>
        <div className="botaoAdd"><button type='button' onClick={handleAdicionar}>ADICIONAR</button></div>
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

