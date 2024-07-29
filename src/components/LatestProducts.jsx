import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { Card, Button } from "react-bootstrap";
import SingleProduct from "./SingleProduct";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../redux/productSlice";

const LatestProducts = () => {
  // const [products, setProducts] = useState([]);
  const products = useSelector((state) => state.products.data);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch("./product.json")
      .then((data) => data.json())
      .then((res) => dispatch(getProduct(res.products)));
  }, []);
  console.log(products);

  return (
    <>
      <Row className="my-3">
        <Col>
          <h1>Latest Products</h1>
        </Col>
      </Row>
      <Row>
        {products &&
          products.map((item, index) => (
            <SingleProduct key={index} product={item} />
          ))}
      </Row>
    </>
  );
};

export default LatestProducts;
