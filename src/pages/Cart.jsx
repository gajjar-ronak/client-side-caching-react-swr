import React from "react";
import useCartData from "../hooks/useGetCartData";
import { Card, Col, Row, Spin, Alert } from "antd";

function Cart() {
  const { carts, isError, isLoading, isValidating } = useCartData();

  // Test if data is cached (useful for debugging)
  const isDataCached = !isValidating && carts; // Checks if data is present and not in validating state

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
      {carts && (
        <Row gutter={[12, 12]}>
          {carts.map((cart) => (
            <Col span={6} key={cart.id}>
              <Card
                hoverable
                style={{ width: 300 }}
                cover={
                  <Card.Meta
                    avatar={
                      <>
                        <i
                          className="anticon anticon-shopping-cart"
                          style={{
                            fontSize: "24px",
                            verticalAlign: "middle",
                          }}
                        />
                      </>
                    }
                  />
                }
                title={`Cart ID: ${cart.id}`}
              >
                <p>Quantity: {cart.products[0].quantity}</p>
                <p>
                  Date:{" "}
                  {new Intl.DateTimeFormat("en-US", {
                    dateStyle: "full",
                  }).format(new Date(cart.date))}
                </p>
              </Card>
            </Col>
          ))}
        </Row>
      )}
    </div>
  );
}

export default Cart;
