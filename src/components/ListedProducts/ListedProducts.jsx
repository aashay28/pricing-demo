import React, { useState, useEffect, useRef } from "react";
import { Container, Row, Col, Card, Button, Spinner } from "react-bootstrap";

const imageStyle = {
  height: "200px",
  objectFit: "cover",
};
const titleStyle = {
  maxHeight: "3em",
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
};

const ListedProducts = () => {
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
      if (
        container.scrollTop + container.clientHeight >=
        container.scrollHeight - 100
      ) {
        setPage(page + 1);
      }
    }
  };

  return (
    <Container
      ref={containerRef}
      style={{
        height: "500px",
        overflowY: "scroll",
        scrollbarWidth: "none",
        WebkitOverflowScrolling: "touch",
      }}
    >
      <style>
        {`
          ::-webkit-scrollbar {
            width: 0;
            background-color: transparent;
          }
        `}
      </style>
      <h1 className="display-4 text-center mt-4">Products</h1>
      <Row>
        {!loading &&
          products.map((product, i) => (
            <Col key={i} sm={6} md={4} lg={3}>
              <Card className="m-2">
                <Card.Img
                  variant="top"
                  src={product.image}
                  style={imageStyle}
                />
                <Card.Body>
                  <Card.Title style={titleStyle}>{product.title}</Card.Title>
                  <Card.Text>${product.price}</Card.Text>
                  <Button variant="primary">Add to Cart</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
      </Row>
      {loading && (
        <div className="text-center mt-3">
          <div>Hanging on, Loading Content</div>
          <Spinner animation="border" variant="primary" />
        </div>
      )}
    </Container>
  );
};

export default ListedProducts;
