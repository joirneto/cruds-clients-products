import React from "react";
import { Link } from "react-router-dom";
export default function Client(){
  
  return(
    <div className="container">
    <nav className="nav">
      <Link to='/'>HOME</Link>
      <Link to='/client'>Client</Link>
      <Link to='/product'>Product</Link>
    </nav>
    <main>
      <h1>CLIENTE</h1>
    </main>
    </div>
  )
}