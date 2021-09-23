import React from 'react';
import './Products.css';

const Products = (props) => {
    const {img,name,price,seller,stock} = props.items;
   
    return (
        <div className="row me-4 p-5">
            <div className="img-section col-3">
              <img src={img} alt="" />
            </div>
            <div className="info-section col-9">
                <h1 className="text-warning">{name}</h1>
                <p>by {seller}</p>
                <h3>price: {price}</h3>
                <p>stock {stock}</p>
                <button onClick={() => props.handler(props.items)} className="btn btn-warning px-5 fw-bold">add to card</button>
            </div>
        </div>
    );
};

export default Products;