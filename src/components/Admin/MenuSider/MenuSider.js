import React from "react";
import { Link } from "react-router-dom";
import { Layout, Menu } from "antd";
import { DashboardOutlined, UsergroupAddOutlined } from "@ant-design/icons";

import "./MenuSider.scss";

export default function MenuSider(props) {
  const { menuCollapsed } = props;
  const { Sider } = Layout;

  return (
    <Sider className="admin-sider" collapsed={menuCollapsed}>
      <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
        <Menu.Item key="1">
          <Link to={"/admin/dashboard"}>
            <DashboardOutlined type="home" />
            <span className="nav-text">Dashboard</span>
          </Link>
        </Menu.Item>

        <Menu.Item key="2">
          <Link to={"/admin/prospectos"}>
            <UsergroupAddOutlined type="menu" />
            <span className="nav-text">Prospectos</span>
          </Link>
        </Menu.Item>
      </Menu>
    </Sider>
  );
}
