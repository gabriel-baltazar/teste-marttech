import React from 'react';
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="row block center">

      <div>
        <a href="#/">
          <h1>Loja</h1>
        </a>
      </div>
      <div className="button">
        <Link to="/produtos">Produtos</Link>
      </div>
      <div className="button">
        <Link to="/pedidos">Pedidos</Link>
      </div>


    </header>
  )
}
export default Header