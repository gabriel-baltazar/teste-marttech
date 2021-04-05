import React from 'react'

const Product = (props) => {
  const { product, onAdd, onRemove } = props;
  return (
    <div className="flex">
      <div style={{ marginBottom: '1rem' }}>
        <img className="small" src={product.image} alt={product.name}></img>
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <h3>R$ {product.price}</h3>
        <span><button onClick={() => onAdd(product)} className="button" >Add</button></span>
      </div>
    </div>
  )
}
export default Product