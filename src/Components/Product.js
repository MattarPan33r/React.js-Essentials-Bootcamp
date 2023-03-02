import ProductItem from './ProductItem';
import React from 'react'

function Product(props) {
    console.log(props);
  return (
    <div className='product'>
        <ProductItem title={props.item[0].title} price={props.item[0].price} description={props.item[0].description} />
        <ProductItem title={props.item[1].title} price={props.item[1].price} description={props.item[1].description} />
      </div>
  )
}

export default Product;
