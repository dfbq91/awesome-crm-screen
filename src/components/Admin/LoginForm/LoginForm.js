import React from "react";
import { Form, Input, Button, Checkbox } from "antd";

import "./LoginForm.scss";

export default function LoginForm() {
  const handleSubmit = async (e) => {
    e.preventDefault();
    window.location.href = "/admin/dashboard";
  };

  return (
    <Form className="login" onSubmitCapture={handleSubmit}>
      <Form.Item>
        <Input
          type="email"
          name="email"
          placeholder="Correo electrónico"
          className="login__input"
        />
      </Form.Item>
      <Form.Item>
        <Input
          type="password"
          name="password"
          placeholder="Contraseña"
          className="login__input"
        />
      </Form.Item>
      <Form.Item>
        <Checkbox name="privacyPolicy">
          He leído y acepto la política de privacidad.
        </Checkbox>
      </Form.Item>
      <Form.Item>
        <Button htmlType="submit" className="login__button">
          Ingresar
        </Button>
      </Form.Item>
    </Form>
  );
}
