import React from 'react'
import Form from './form-data.component'
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
        <Form />
      </div>
    </div>
  )
}
export default Modal
