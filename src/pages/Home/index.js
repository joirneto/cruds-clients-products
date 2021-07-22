import React from "react";
import { Link } from "react-router-dom";



export default function Home(){
  
  return(
    <div className="container">
    <nav className="nav">
      <Link to='/'>HOME</Link>
      <Link to='/client'>Client</Link>
      <Link to='/product'>Product</Link>
    </nav>
    <main>
      <h1>HOME</h1>
    </main>
    </div>
  )
}