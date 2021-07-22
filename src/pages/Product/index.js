import {React, useState, useEffect} from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';
import logo from '../../../src/logo.png'
import edit from '../../../src/edit.png'
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



export default function Product(){
  const [nome, setNome] = useState('');
  const [categoria, setCategoria] = useState('');
  const [preco, setPreco] = useState('');
  let lista = JSON.parse(localStorage.getItem('product')) ? JSON.parse(localStorage.getItem('product')): [];
  const history = useHistory();
  
 useEffect(()=>{
    
  },[]);

  const data = {
    id: uuidv4(),
    nome,
    categoria,
    preco 
  }

  function handleAdicionar(){
    if(validator(nome, categoria, preco)){
      if(validatorNum(preco)){
        if(localStorage.getItem('product') === null){
          localStorage.setItem('product', JSON.stringify([data]));
          setNome('');
          setCategoria('');
          setPreco('');
          history.push('/product');
        }
        else{
          localStorage.setItem(
            'product',
            JSON.stringify([
              ...JSON.parse(localStorage.getItem('product')),
                  data
              ])
            );
            setNome('');
            setCategoria('');
            setPreco('');
            history.push('/product');
        }
      }
    }
  }

  function validator(nome,categoria,preco){
    if((nome !== null && nome !== '') && (categoria !== null && categoria !== '') && (preco !== null && preco !== '')){
      return true;
    }
    else{
     alert("Prencha todos os campos solicitados!") ;
    }
  }

  function validatorNum(preco){
    if(!isNaN(preco)){
      return true;
    }
    else{
     alert("Campo preco deve ser um numero!") ;
    }
  }

  function excluirProd(id){
    console.log(id);
    let lista = JSON.parse(localStorage.getItem('product'));
    let index = lista.indexOf(id);
    lista.splice(index,1);
    localStorage.setItem('product', JSON.stringify(lista));
    history.push('/product');

  }


  return(
    
    <Container fluid className="Container">
      <header>TSTES</header>
    <Row>
    <Col className="colP" xs={1}>
      <div>
        <Link to='/'>HOME</Link>
      </div>
      <div>
        <Link to='/client'>Client</Link>
      </div>
      <div>
        <Link to='/product'>Product</Link>
      </div>
    </Col>
    <Col xs={8} >
    <main>
      <h1>PRODUTO</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>NOME</th>
            <th>DESCRICAO</th>
          </tr>
        </thead>
        <tbody>
          {     
            lista.map(product =>{
              return(
                <tr key={`${product.id}`}>
                  <td >{product.nome}</td>
                  <td >{product.categoria}</td>
                  <td >{product.preco}</td>
                  <td><img src={edit} alt="Excluir" width="40" title="Excluir" onClick = {e => excluirProd(product.id)} /></td>
                  <td><img src="https://static-cse.canva.com/blob/183497/Canva-Photographer-Works-with-His-DSLR-Camera.c54ca40f.jpg" alt="Excluir" width="40"  /></td>
                </tr>
              )
           })
          }
        </tbody>
      </Table>
      <h2>Adicionar Produto</h2>
      <form>
        <input type="text" placeholder="Nome do Produto" id="name" value = {nome} onChange = {e => setNome(e.target.value)}></input>
        <input type="text" placeholder="Categoria" id="categoria" value = {categoria} onChange = {e => setCategoria(e.target.value)}></input>
        <input type="text" placeholder="Preço Unitário" id="preco" value = {preco} onChange = {e => setPreco(e.target.value)}></input>
        <button type='button' onClick={handleAdicionar}>ADICIONAR</button>
      </form>
    </main>
    </Col>
  </Row>
    <footer>
      TESTES
    </footer>
    
    </Container>
  )
}

//<img src={logo} width="20" height="20" alt="" title="Excluir" />
//