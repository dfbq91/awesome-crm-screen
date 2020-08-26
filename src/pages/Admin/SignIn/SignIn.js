import React from "react";
import { Layout, Tabs } from "antd";
import Logo from "../../../assets/img/png/logo.png";
import LoginForm from '../../../components/Admin/LoginForm';

import "./SignIn.scss";

export default function SignIn() {
  const { Content } = Layout;
  const { TabPane } = Tabs;
  return (
    <Layout className="sign-in">
      <Content className="sign-in__content">
        <h1 className="sign-in__content-logo">
          <img src={Logo} alt="CourseFactory" />
        </h1>
        <div className="sign-in__content-tabs">
          <Tabs type="card">
            <TabPane tab={<span>Ingresar</span>} key="2">
              <LoginForm/>
            </TabPane>
          </Tabs>
        </div>
      </Content>
    </Layout>
  );
}
