import { Layout, Segmented } from "antd";
import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const pathname = location.pathname;
  const defaultValue = pathname.split("/")[1] || "/";

  return (
    <Layout.Header
      style={{
        padding: 0,
        background: "#fff",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Segmented
        defaultValue={defaultValue}
        options={[
          { label: "Product Listing", value: "/" },
          { label: "Carts", value: "/carts" },
        ]}
        onChange={(value) => navigate(value)}
        style={{ margin: "0 auto" }}
      />
    </Layout.Header>
  );
}

export default Header;
