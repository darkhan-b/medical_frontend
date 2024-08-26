import React, { useState } from "react";
import "./Login.scss";
import { Button, Col, Input, Row, Typography, Spin, Flex } from "antd";
import { useNavigate } from "react-router-dom";

const { Title } = Typography;

const LoginPage = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSignUp = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate("/signUp");
    }, 1000);
  };

  const handleSignIn = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate("/");
    }, 1500);
  };
  return (
    <div className="login_page">
      <Row className="login_page__block">
        <Col span={24}>
          <div className="login_page__loginBlock">
            {loading ? (
              <div className="login_page__spinner">
                <Spin className="ant-spin-text" size="default" />
              </div>
            ) : (
              <>
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
                <Flex vertical style={{ padding: 20 }}>
                  <Button
                    type="primary"
                    style={{ marginBottom: 15 }}
                    onClick={handleSignIn}
                  >
                    Sign In
                  </Button>

                  <Button type="default" onClick={handleSignUp}>
                    Sign Up
                  </Button>
                </Flex>
              </>
            )}
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default LoginPage;
