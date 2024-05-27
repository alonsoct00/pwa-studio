import React from 'react';
import ProductCard from "../ProductCard";
import products from './productsData';

const App = () => {
    return (
        <div className="product-list">
            {products.map((product, index) => (
                <ProductCard key={index} {...product} />
            ))}
        </div>
    );
};

export default App;
