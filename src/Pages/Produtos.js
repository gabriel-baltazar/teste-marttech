import { useState, useEffect } from 'react';
import Cart from '../components/Cart';
import Main from '../components/Main';
import data from '../data';

const cartFromLocalStorage = JSON.parse(localStorage.getItem('cart') || "[]")

const Produtos = () => {
  const { products } = data;
  const [cartItems, setCartItems] = useState(cartFromLocalStorage);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems))
  }, [cartItems])

  const onAdd = (product) => {

    const exist = cartItems.find(x => x.id === product.id);
    if (exist) {
      setCartItems(cartItems.map(x => x.id === product.id ? {
        ...exist, qty: exist.qty + 1
      } : x
      ))
      window.location.reload();
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }])
      window.location.reload();
    }
  }
  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {

      setCartItems(cartItems.filter((x) => x.id !== product.id));
      window.location.reload();
    } else {
      setCartItems(cartItems.map(x => x.id === product.id ? {
        ...exist, qty: exist.qty - 1
      } : x
      ))
      window.location.reload();
    }
  }
  return (

    <div className="App">
      <div className="row">
        <Main onAdd={onAdd} products={products}></Main>
        <Cart onAdd={onAdd} onRemove={onRemove} cartItems={cartItems}></Cart>
      </div>
    </div>
  );
}

export default Produtos;
