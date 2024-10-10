import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Col } from 'react-bootstrap';

const Btn = ({ item }) => {
  const { title, description, images, price } = item; // Add price here

  return (
    <Col md={4} className="mb-4">
      <Card style={{ width: '100%' }}>
        <Card.Img variant="top" src={images[0]} alt={title}  style={{ width: '300px', height: '400px' }}  />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <Card.Text><strong>Price: ${price}</strong></Card.Text> {/* Display price */}
          <Button variant="primary">View Details</Button>
        </Card.Body>
      </Card>
      </Col>
  );
};

export default Btn;
