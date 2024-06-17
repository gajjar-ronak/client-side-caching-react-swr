import React from "react";
import useGetProductListing from "../hooks/useGetProductListing";
import { Card, Col, Row, Spin } from "antd";
import Meta from "antd/es/card/Meta";

function ProductListingPage() {
  const { products, isLoading, isError } = useGetProductListing();

  return (
    <div style={{ margin: "0 auto", padding: "50px" }}>
      {isLoading && (
        <Spin tip="Loading...">
          <Row>
            <Col span={24}>
              <Card style={{ width: 200 }} />
            </Col>
          </Row>
        </Spin>
      )}
      {isError && <p>Error</p>}
      {products && (
        <Row gutter={[16, 16]}>
          {products.map((product) => (
            <Col key={product.id} span={6}>
              <Card
                hoverable
                style={{
                  width: "100%",
                }}
              >
                <Meta
                  title={product.title}
                  description={product.description.substr(0, 100) + "..."}
                />
                <p>{`Price: $${product.price}`}</p>
                <p>{`Category: ${product.category}`}</p>
                <p>{`Rating: ${product.rating.rate}`}</p>
                <p>{`Count: ${product.rating.count}`}</p>
              </Card>
            </Col>
          ))}
        </Row>
      )}
    </div>
  );
}

export default ProductListingPage;
