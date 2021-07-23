import React from "react";
import { Link } from "react-router-dom";
import logohc from '../../../src/hiring-coders-logo.png'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



export default function Home(){  
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
      <h4 className = "t-principal" >Seja bem-vindo aoApp React - Gestão de Cadastro para Clientes e Produtos</h4>
      </main>
      </Col>
      <footer>
        <p>
          Projeto desenvolvido para entrega do Desafio:2 - Bootcamp Hiring Coders#2 por:
          Joir Neto /
          <a className='link-ref' href="https://linkedin.com/in/joir-neto"> Linkedin</a> /
          <a className='link-ref' href="https://github.com/joirneto"> Github</a>
        </p>
        <img src={logohc} alt="HC" width="200px" height="auto"></img>
      </footer>
      </Row>
    </Container>
  )
}