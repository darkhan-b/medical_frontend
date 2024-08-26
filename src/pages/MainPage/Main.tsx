// MainLayout.tsx
import React from "react";
import { Outlet, Link } from "react-router-dom";
import { UserOutlined, VideoCameraOutlined } from "@ant-design/icons";
import { Layout, Menu, theme } from "antd";

const { Header, Content, Sider } = Layout;

const items = [
  {
    key: "1",
    icon: <UserOutlined />,
    label: <Link to="/profile">Profile</Link>,
  },
  {
    key: "2",
    icon: <VideoCameraOutlined />,
    label: <Link to="/results">Results</Link>,
  },
];

const MainLayout: React.FC = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={items}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }} />
        <Content style={{ margin: "24px 16px 0" }}>
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            <Outlet />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
