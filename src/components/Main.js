import React from 'react';
import Product from './Product'

const Main = (props) => {
  const { products, onAdd } = props
  return (
    <main className="col-2">
      <h2 style={{ marginLeft: '2rem', marginTop: '2rem' }}>Produtos</h2>
      <div className='flex'>
        {products.map((product) => (
          <Product key={product.id} product={product} onAdd={onAdd}></Product>
        ))}
      </div>
    </main>
  )
}
export default Main