import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";

function AddProducts() {
  const [validated, setValidated] = useState(false);
  const [productData, setProductData] = useState({
    productName: "",
    category: "",
    price: "",
    stock: "",
    image: null,
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      // Handle the form submission, e.g., send data to the server
      alert("Product added successfully");
    }
    setValidated(true);
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "image" && files.length > 0) {
      setProductData({ ...productData, [name]: files[0] });
    } else {
      setProductData({ ...productData, [name]: value });
    }
  };

  console.log(productData);

  return (
    <Container className="d-flex justify-content-center align-items-center min-vh-100">
      <Form
        noValidate
        validated={validated}
        onSubmit={handleSubmit}
        className="form-width"
      >
        <Row className="mb-3">
          <Form.Group
            controlId="validationCustom01"
            className="position-relative"
          >
            <Form.Label>Product Name:</Form.Label>
            <Form.Control
              onChange={handleChange}
              required
              type="text"
              placeholder="Enter product name"
              name="productName"
              value={productData.productName}
            />
            <Form.Control.Feedback type="invalid" tooltip>
              Please enter product name.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group
            controlId="validationCustom02"
            className="position-relative"
          >
            <Form.Label>Product Category:</Form.Label>
            <Form.Control
              onChange={handleChange}
              required
              type="text"
              placeholder="Enter category"
              name="category"
              value={productData.category}
            />
            <Form.Control.Feedback type="invalid" tooltip>
              Please enter category.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group
            controlId="validationCustom03"
            className="position-relative"
          >
            <Form.Label>Price:</Form.Label>
            <Form.Control
              onChange={handleChange}
              required
              type="text"
              placeholder="Enter price"
              name="price"
              value={productData.price}
            />
            <Form.Control.Feedback type="invalid" tooltip>
              Please enter price.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group
            controlId="validationCustom04"
            className="position-relative"
          >
            <Form.Label>Stock:</Form.Label>
            <Form.Control
              onChange={handleChange}
              required
              type="text"
              placeholder="Enter stock number"
              name="stock"
              value={productData.stock}
            />
            <Form.Control.Feedback type="invalid" tooltip>
              Please enter stock number.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group controlId="formFile" className="mb-3 position-relative">
            <Form.Label>Upload Image:</Form.Label>
            <Form.Control
              onChange={handleChange}
              type="file"
              name="image"
              required
            />
            <Form.Control.Feedback type="invalid" tooltip>
              Please upload a product image.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Button type="submit">Submit form</Button>
      </Form>
    </Container>
  );
}

export default AddProducts;
