import {React, useState, useEffect} from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';
import excluir from '../../../src/excluir.png'
import edit from '../../../src/edit.png'
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import swal from 'sweetalert';


export default function Product(){
  const [nome, setNome] = useState('');
  const [categoria, setCategoria] = useState('');
  const [quantidade, setQuantidade] = useState('');
  const [preco, setPreco] = useState('');
  const [imagem, setImagem] = useState('');
  let lista = JSON.parse(localStorage.getItem('product')) ? JSON.parse(localStorage.getItem('product')): [];
  const history = useHistory();
  
  
  const data = {
    id: uuidv4(),
    nome,
    categoria,
    quantidade,
    preco,
    imagem 
  }

  function handleAdicionar(){
    if(validator(nome, categoria, quantidade, preco)){
      if(validatorNum(preco)){
        if(localStorage.getItem('product') === null){
          localStorage.setItem('product', JSON.stringify([data]));
          setNome('');
          setCategoria('');
          setQuantidade('');
          setPreco('');
          setImagem('');
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
            setQuantidade('');
            setPreco('');
            setImagem('');
            history.push('/product');
          
        }
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

  function editarProd(id){
    let lista = JSON.parse(localStorage.getItem('product'));
    let element = lista.find(element => element.id === id);
    localStorage.setItem('edit', JSON.stringify(element));
    history.push('/edit-product');
    
 }


  function excluirProd(produto){

    let index;
    let produtos = JSON.parse(localStorage.getItem('product'));
    for(let i=0; i<produtos.length;i++){
      if(produtos[i].id === produto.id){
        index = i;
      }
    }
   
 
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
            <th>NOME DO PRODUTO</th>
            <th>CATEGORIA</th>
            <th>QUANTIDADE</th>
            <th>PREÇO UNITÁRIO</th>
            <th>IMAGEM PRODUTO</th>
            <th>EDITAR PRODUTO</th>
            <th>EXCLUIR PRODUTO</th>
          </tr>
        </thead>
        <tbody>
          {     
            lista.map(product =>{
              return(
                <tr key={`${product.id}`}>
                  <td >{product.nome}</td>
                  <td >{product.categoria}</td>
                  <td >{product.quantidade}</td>
                  <td >{product.preco}</td>
                  <td><img src={product.imagem} alt="Imagem" width="40" title="Imagem" /></td>
                  <td><img src={edit} alt="Editar" width="60" title="Editar" onClick = {e => editarProd(product.id)} /></td>
                  <td><img src={excluir} alt="Excluir" width="40" title="Excluir" onClick = {e => excluirProd(product)} /></td>
                </tr>
              )
           })
          }
        </tbody>
      </Table>
      <h3>Adicionar Produto</h3>
      <form>
        <input type="text" placeholder="Nome do Produto" id="name" value = {nome} onChange = {e => setNome(e.target.value)}></input>
        <input type="text" placeholder="Categoria" id="categoria" value = {categoria} onChange = {e => setCategoria(e.target.value)}></input>
        <input type="text" placeholder="Quantidade" id="quantidade" value = {quantidade} onChange = {e => setQuantidade(e.target.value)}></input>
        <input type="text" placeholder="Preço Unitário" id="preco" value = {preco} onChange = {e => setPreco(e.target.value.replace(",","."))}></input>
        <input type="text" placeholder="Link da Imagem" id="imagem" value = {imagem} onChange = {e => setImagem(e.target.value)}></input>
        <div className="botaoAdd"><button type='button' onClick={handleAdicionar}>ADICIONAR</button></div>
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

