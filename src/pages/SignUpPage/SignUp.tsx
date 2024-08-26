import { useState } from "react";
import "./SignUp.scss";
import {
  Button,
  Col,
  Input,
  Row,
  Typography,
  Flex,
  Select,
  message,
} from "antd";

const { Title } = Typography;

const SignUpPage = () => {
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [passwordValidation, setPasswordValidation] = useState({
    hasNumber: false,
    hasLetter: false,
    hasUpperCase: false,
    hasSpecialChar: false,
  });
  const [showValidation, setShowValidation] = useState(false);

  const validatePassword = (password: string) => {
    const hasNumber = /\d/.test(password);
    const hasLetter = /[a-z]/.test(password);
    const hasUpperCase = /[A-Z]/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    setPasswordValidation({
      hasNumber,
      hasLetter,
      hasUpperCase,
      hasSpecialChar,
    });

    return hasNumber && hasLetter && hasUpperCase && hasSpecialChar;
  };

  const handlePasswordChange = (e: { target: { value: any } }) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    if (showValidation) {
      validatePassword(newPassword);
    }
  };

  const handleSignUp = () => {
    const isValid = validatePassword(password);
    setShowValidation(true);

    if (!isValid) {
      setPasswordError("Password does not meet the requirements");
      message.error("Password does not meet the requirements");
      return;
    }

    if (password !== passwordConfirm) {
      setPasswordError("Passwords do not match");
      message.error("Passwords do not match");
    } else {
      setPasswordError("");
      message.success("Successfully signed up!");
    }
  };

  return (
    <div className="login_page">
      <Row className="login_page__block">
        <Col span={24}>
          <div className="login_page__loginBlock">
            <>
              <Title
                level={3}
                style={{
                  padding: "15px 15px 5px 15px",
                  fontWeight: 700,
                  marginTop: 10,
                }}
              >
                Sign Up
              </Title>
              <div className="login_page__divider"></div>
              <div style={{ padding: 20 }}>
                <div style={{ display: "flex", marginBottom: 10 }}>
                  Your Email
                </div>
                <Input name="email" allowClear placeholder="doctor@nu.kz" />
              </div>

              <div style={{ padding: "5px 20px 20px 20px" }}>
                <div style={{ display: "flex", marginBottom: 10 }}>
                  Full name
                </div>
                <Input placeholder="Your full name" name="fio" allowClear />
              </div>
              <div style={{ padding: "5px 20px 20px 20px" }}>
                <div style={{ display: "flex", marginBottom: 10 }}>
                  Your IIN
                </div>
                <Input
                  placeholder="Your IIN"
                  name="iin"
                  allowClear
                  maxLength={12}
                />
              </div>

              <div style={{ padding: "5px 20px 20px 20px" }}>
                <div style={{ display: "flex", marginBottom: 10 }}>
                  Your password
                </div>
                <Input.Password
                  name="password"
                  placeholder="Password"
                  allowClear
                  value={password}
                  onChange={handlePasswordChange}
                />
              </div>

              <div style={{ padding: "5px 20px 20px 20px" }}>
                <div style={{ display: "flex", marginBottom: 10 }}>
                  Confirm password
                </div>
                <Input.Password
                  name="password_confirm"
                  placeholder="Confirm Password"
                  allowClear
                  value={passwordConfirm}
                  onChange={(e) => setPasswordConfirm(e.target.value)}
                />
                {passwordError && (
                  <div style={{ color: "red", marginTop: 5 }}>
                    {passwordError}
                  </div>
                )}
              </div>

              {showValidation && (
                <div
                  style={{
                    marginTop: 5,
                    textAlign: "left",
                    padding: "5px 20px 20px 20px",
                  }}
                >
                  <div
                    style={{
                      color: passwordValidation.hasNumber ? "green" : "red",
                    }}
                  >
                    At least 1 digit
                  </div>
                  <div
                    style={{
                      color: passwordValidation.hasLetter ? "green" : "red",
                    }}
                  >
                    At least 1 lowercase letter
                  </div>
                  <div
                    style={{
                      color: passwordValidation.hasUpperCase ? "green" : "red",
                    }}
                  >
                    At least 1 uppercase letter
                  </div>
                  <div
                    style={{
                      color: passwordValidation.hasSpecialChar
                        ? "green"
                        : "red",
                    }}
                  >
                    At least 1 special character
                  </div>
                </div>
              )}

              <div style={{ padding: "5px 20px 20px 20px" }}>
                <div style={{ display: "flex", marginBottom: 10 }}>
                  Your Role
                </div>
                <Select
                  style={{ width: "100%", textAlign: "left" }}
                  options={[
                    {
                      value: "1",
                      label: "Patient",
                    },
                    {
                      value: "2",
                      label: "Doctor",
                    },
                  ]}
                  allowClear
                  maxLength={12}
                />
              </div>

              <div className="login_page__divider"></div>
              <Flex vertical style={{ padding: 20 }}>
                <Button type="primary" onClick={handleSignUp}>
                  Sign Up
                </Button>
              </Flex>
            </>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default SignUpPage;
