import React from 'react'

function ProductItem(props) {

    let title=props.title;

    return (
    <div>
        <div className='product-item'>
            <h1>{title}</h1>
        </div>
        <div className='product-item__price'>
            {props.price}
        </div>
        <div className='product-item__description'>
            {props.description}
        </div>
      
    </div>
  )
}

export default ProductItem;
