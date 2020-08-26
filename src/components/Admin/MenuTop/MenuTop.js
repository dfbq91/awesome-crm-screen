import React from "react";
import { Button } from "antd";
import { MenuOutlined, PoweroffOutlined } from "@ant-design/icons";

import "./MenuTop.scss";
import Logo from "../../../assets/img/png/logo.png";

export default function MenuTop(props) {
  const { menuCollapsed, setMenuCollapsed } = props;

  return (
    <div className="menu-top">
      <div className="menu-top__left">
        <img
          src={Logo}
          alt="Logo Course Factory"
          className="menu-top__left-logo"
        />
        <Button type="link" onClick={() => setMenuCollapsed(!menuCollapsed)}>
          <MenuOutlined/>
        </Button>
      </div>

      <div className="menu-top__right">
        <Button type="link" onClick={() => console.log("Desconexión...")}>
          <PoweroffOutlined/>
        </Button>
      </div>
    </div>
  );
}
