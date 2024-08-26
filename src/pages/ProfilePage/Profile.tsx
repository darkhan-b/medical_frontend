import { Col, Input, Row, Select } from "antd";
import React from "react";

function Profile() {
  const userProfile = JSON.parse(localStorage.getItem("userProfile") || "{}");
  console.log(userProfile);
  return (
    <div>
      <div
        style={{
          paddingTop: 10,
          fontSize: 24,
          fontWeight: 600,
          marginBottom: 30,
        }}
      >
        Welcome on the page, DARKHAN BAIBULAT (Role: Doctor)
      </div>
      <Row gutter={[20, 20]}>
        <Col span={6}>
          <div style={{ marginBottom: 10 }}>Username:</div>
          <Input disabled value="DARKHAN_BAIBULAT" />
        </Col>
        <Col span={6}>
          <div style={{ marginBottom: 10 }}>Full name:</div>
          <Input disabled value={userProfile.fullname} />
        </Col>
        <Col span={6}>
          <div style={{ marginBottom: 10 }}>Your Role:</div>
          <Input disabled value="Doctor" />
        </Col>
        <Col span={6}>
          <div style={{ marginBottom: 10 }}>Email:</div>
          <Input disabled value="xxlabbesxx@gmail.com" />
        </Col>
        <Col span={6}>
          <div style={{ marginBottom: 10 }}>Phone number:</div>
          <Input disabled value="+7 (708) 940 26 64" />
        </Col>
        <Col span={6}>
          <div style={{ marginBottom: 10 }}>Address:</div>
          <Input placeholder="" />
        </Col>
        <Col span={6}>
          <div style={{ marginBottom: 10 }}>Gender:</div>
          <Select
            value={userProfile.gender}
            options={[
              {
                value: "1",
                label: "Male",
              },
              {
                value: "2",
                label: "Female",
              },
            ]}
            style={{ width: "100%" }}
            placeholder=""
          />
        </Col>
        <Col span={6}>
          <div style={{ marginBottom: 10 }}>Date of Birth:</div>
          <Input
            value={userProfile.birth}
            style={{ width: "100%" }}
            placeholder=""
          />
        </Col>
      </Row>
    </div>
  );
}

export default Profile;
