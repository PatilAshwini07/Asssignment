import React from 'react';
import styled from 'styled-components';
import ProductList from './components/ProductList';

const Container = styled.div`
  max-width: 400px;
  margin: 20px;
  padding: 2rem;
`;

const App = () => {
  return (
    <Container>
      <h1>E-commerce Product Catalog</h1>
      <ProductList />
    </Container>
  );
};

export default App;