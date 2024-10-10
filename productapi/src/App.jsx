import React, { useEffect, useState } from 'react';
import Btn from './components/Btn';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row } from 'react-bootstrap';


const App = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    getProducts();
  }, []);

  async function getProducts() {
    try {
      const response = await fetch('https://dummyjson.com/products');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const res = await response.json();
      setProducts(res.products);
    } catch (error) {
      console.log(error);
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  return (
    <Container>
      {loading && <h1>Loading...</h1>}
      {error && <h1>Something went wrong!</h1>}
      <Row>
      
        {products.map((data) => (
          <Btn key={data.id} item={data} />
        ))}
       
      </Row>
    </Container>
  );
};

export default App;
