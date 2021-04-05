import React from 'react'
import '../modal.css'
const Modal = ({ id = "modal", onClose = () => { }, children }) => {

  const handleOutsideClick = (e) => {
    if (e.target.id == id) onClose();
  }
  return (
    <div id={id} className="modal" onClick={handleOutsideClick}>
      <div className="container">
        <button className="close" onClick={onClose}>✖️</button>
        <div className="content"> <h2>Finalizar pedido</h2> </div>
        <form>
          <div><input type="text" name="name" placeholder="Nome" /></div>
          <div><input type="number" name="cpf" placeholder="CPF" /></div>
          <button className="bt-finalizar" type="submit">Finalizar</button>
        </form>
      </div>
    </div>
  )
}
export default Modal
