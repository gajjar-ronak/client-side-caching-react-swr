import React from "react";
import useGetProductListing from "../hooks/useGetProductListing";
import { Card, Col, Row, Spin, Alert } from "antd";
import Meta from "antd/es/card/Meta";

function ProductListingPage() {
  const { products, isLoading, isError, isValidating } = useGetProductListing();

  // Test if data is cached (useful for debugging)
  const isDataCached = !isValidating && products; // Checks if data is present and not in validating state

  return (
    <div style={{ margin: "0 auto", padding: "50px" }}>
      {isDataCached && (
        <Alert
          message="Data is cached! Change tabs and test how fast data loads in the browser without reloading and seeing the loading indicator every time."
          type="success"
          showIcon
          style={{ margin: '0 auto', width: '50%', marginBottom: '20px' }}
        />
      )}
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
