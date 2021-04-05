import React, { useState } from 'react';
import Modal from './Modal'
const Cart = (props) => {

  const [isModalVisible, setIsModalVisible] = useState(false)

  const { cartItems, onAdd, onRemove } = props;
  const itemsPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0);
  const totalPrice = itemsPrice;


  return (
    <div className="block-cart col-1">

      <h2>Carrinho</h2>
      <div>
        {cartItems.length === 0 && <div>Carrinho vazio </div>}
        {cartItems.map((item) => (
          <div key={item.id} className="row">
            <div className="col-2">{item.name}</div>
            <div className="col-2">
              <button onClick={() => onRemove(item)} className="remove">-</button>
              <button onClick={() => onAdd(item)} className="add">+</button>
            </div>
            <div className="col-2 text-right">
              {item.qty} x R${item.price.toFixed(2)}
            </div>
          </div>
        )
        )}
        {cartItems.length !== 0 && (
          <>
            <hr />
            <div className="row">
              <div className="col-2"> <strong>Total</strong></div>
              <div className="col-1 text-right">R${totalPrice.toFixed(2)}</div>
            </div>
            <hr />
            <div className="row">
              <button onClick={() => setIsModalVisible(true)} className="button">Finalizar</button>
              {isModalVisible ? <Modal onClose={() => setIsModalVisible(false)} /> : null}
            </div>
          </>
        )}
      </div>
    </div>
  )
}
export default Cart