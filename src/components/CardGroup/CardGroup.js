import React from 'react';
import Card from '../Card/Card';

const CardGroup = () => {

    const products = [
        { id:1,name:'laptop',price:120},
        { id:2,name:'Rolex',price:2220},
        { id:3,name:'Iron Man suit',price:33330},
    ]

    return (
        <div className="card-group">
            {
                products.map(product=> <Card key={product.id} product={product}></Card>)
            }
  
</div>
    );
};

export default CardGroup;