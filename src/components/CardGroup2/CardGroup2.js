import React from 'react';
import { CardGroup } from 'react-bootstrap';
import Card2 from '../Card2/Card2';

const CardGroup2 = () => {
    const products = [
        { id:1,name:'laptop',price:120},
        { id:2,name:'Rolex',price:2220},
        { id:3,name:'Iron Man suit',price:33330},
    ]
    return (
        <div>
            <CardGroup>
                {
                    products.map(product => <Card2 key={product.id} product={product} ></Card2>)
                }
            </CardGroup>
        </div>
    );
};

export default CardGroup2;