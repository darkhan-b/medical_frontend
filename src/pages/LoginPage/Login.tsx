import React from "react";
import "./Login.scss";
import { Button, Col, Flex, Input, Row, Typography } from "antd";

const { Title } = Typography;
const LoginPage = () => {
  return (
    <div className="login_page">
      <Row className="login_page__block">
        <Col span={12}></Col>
        <Col span={12}>
          <div className="login_page__loginBlock">
            <Title
              level={3}
              style={{
                padding: "15px 15px 5px 15px",
                fontWeight: 700,
                marginTop: 10,
              }}
            >
              Login
            </Title>
            <div className="login_page__divider"></div>
            <div style={{ padding: 20 }}>
              <div style={{ display: "flex", marginBottom: 10 }}>
                Your Email
              </div>
              <Input allowClear placeholder="doctor@nu.kz" />
            </div>

            <div style={{ padding: "5px 20px 20px 20px" }}>
              <div style={{ display: "flex", marginBottom: 10 }}>
                Your password
              </div>
              <Input.Password placeholder="Password" allowClear />
            </div>
            <div className="login_page__divider"></div>
            <Flex vertical gap="small" style={{ padding: 20 }}>
              <Button type="primary">Sign In</Button>
              <Button type="default">Sign Up</Button>
            </Flex>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default LoginPage;
