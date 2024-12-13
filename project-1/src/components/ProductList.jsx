import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch products from an API or use sample data
    const sampleProducts = [
      {
        name: 'Product 1',
        price: 19.99,
        category: 'Category A',
        inStock: true
      },
      {
        name: 'Product 2',
        price: 29.99,
        category: 'Category B',
        inStock: false
      },
      {
        name: 'Product 3',
        price: 14.99,
        category: 'Category A',
        inStock: true
      }
    ];
    setProducts(sampleProducts);
  }, []);

  return (
    <div>
      {products.map((product) => (
        <ProductCard key={product.name} product={product} />
      ))}
    </div>
  );
};

export default ProductList;