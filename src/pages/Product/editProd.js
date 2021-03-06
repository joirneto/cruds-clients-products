import {React, useState} from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import swal from 'sweetalert';
import logohc from '../../../src/hiring-coders-logo.png'



export default function EditProduct(){
  const element = JSON.parse(localStorage.getItem('edit')) ? JSON.parse(localStorage.getItem('edit')): [];
  const produtos = JSON.parse(localStorage.getItem('product')) ? JSON.parse(localStorage.getItem('product')): [];
  const [id, setId] = useState(element.id)
  const [nome, setNome] = useState(element.nome);
  const [categoria, setCategoria] = useState(element.categoria);
  const [quantidade, setQuantidade] = useState(element.quantidade);
  const [preco, setPreco] = useState(element.preco);
  const [imagem, setImagem] = useState(element.imagem);
  const history = useHistory();

  const data = {
    id,
    nome,
    categoria,
    quantidade,
    preco,
    imagem 
  }

  function handleEditar(){
    if(validator(nome, categoria, quantidade, preco)){
      if(validatorNum(preco)){
        let index;
        for(let i=0; i<produtos.length;i++){
          if(produtos[i].id === element.id){
            index = i;
          }
        }
        produtos[index] = data;
        localStorage.setItem('product', JSON.stringify(produtos));
        localStorage.setItem('edit', '');
        history.push('/product');

      }
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

  function validatorNum(preco){
    if(!isNaN(preco) && !isNaN(quantidade)){
      return true;
    }
    else{
      swal('Campo preco e quantidade devem ser um numero!');
    }
  }


  return(
    
    <Container fluid className="Container">
      <header>
        <h1>App React - Gest??o de Cadastro para Clientes e Produtos</h1>
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
      <h1>EDITAR PRODUTO</h1>
      <form>
        <input type="text" placeholder="Nome do Produto" id="name" value = {nome} onChange = {e => setNome(e.target.value)}></input>
        <input type="text" placeholder="Categoria" id="categoria" value = {categoria} onChange = {e => setCategoria(e.target.value)}></input>
        <input type="text" placeholder="Quantidade" id="quantidade" value = {quantidade} onChange = {e => setQuantidade(e.target.value)}></input>
        <input type="text" placeholder="Pre??o Unit??rio" id="preco" value = {preco} onChange = {e => setPreco(e.target.value.replace(",","."))}></input>
        <input type="text" placeholder="Link da Imagem" id="imagem" value = {imagem} onChange = {e => setImagem(e.target.value)}></input>
        <div className="botaoAdd"><button type='button' onClick={handleEditar}>CONFIRMAR EDI????O</button></div>
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

