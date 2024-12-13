import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  border: 1px solid #ccc;
  padding: 1rem;
  text-align: center;
`;

const ProductCard = ({ product }) => {
  return (
    <Card>
      <h3>{product.name}</h3>
      <p>Price: ${product.price}</p>
      <p>Category: {product.category}</p>
      <p>In Stock: {product.inStock ? 'Yes' : 'No'}</p>
      <button>Add to Wishlist</button>
    </Card>
  );
};

export default ProductCard;