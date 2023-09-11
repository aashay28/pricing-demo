import React, { useState, useEffect, useRef } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  const containerRef = useRef(null);

  useEffect(() => {
    fetchProducts();
    // Attach the scroll event listener to the container
    containerRef.current.addEventListener("scroll", handleScroll);

    // Remove the event listener when the component unmounts
    return () => {
      containerRef.current.removeEventListener("scroll", handleScroll);
    };
  }, [page]);

  const fetchProducts = () => {
    setLoading(true);
    fetch(`https://fakestoreapi.com/products?page=${page}`)
      .then((response) => response.json())
      .then((data) => {
        setProducts([...products, ...data]);
        setLoading(false);
      });
  };

  const handleScroll = () => {
    const container = containerRef.current;
    if (container) {
      // Check if the user has scrolled to the bottom of the container
      if (
        container.scrollTop + container.clientHeight >=
        container.scrollHeight - 100
      ) {
        // Load more products when the user is near the bottom
        setPage(page + 1);
      }
    }
  };

  return (
    <Container
      ref={containerRef}
      style={{ height: "500px", overflowY: "scroll" }}
    >
      <h1 className="display-4 text-center mt-4">Task 2</h1>
      <Row>
        {products.map((product) => (
          <Col key={product.id} sm={6} md={4} lg={3}>
            <Card>
              <Card.Img variant="top" src={product.image} />
              <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>${product.price}</Card.Text>
                <Button variant="primary">Add to Cart</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      {loading && <p>Loading...</p>}
    </Container>
  );
};

export default Products;
