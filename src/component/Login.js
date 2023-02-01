import React, { useState } from "react";
import { Button, Checkbox, Form, Input } from "antd";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import "./Login.css";

const Login = () => {
  const [showError, setShowError] = useState(false);

  const navigate = useNavigate();

  const onFinish = (values) => {
    console.log("Success:", values);

    const data = {
      username: values.username,
      password: values.password,
    };

    const headers = {
      contentType: "application/json",
    };

    axios
      .post("http://15.207.40.153:8010/ulp/api/auth/login", data, headers)
      .then((response) => {
        const accessToken = response.data.accessToken;

        const pushingStudentRole = response.data.roles.push("STUDENT");
        console.log(pushingStudentRole);

        const roles = response.data.roles;
        console.log(roles);
        console.log("roles", roles);

        const rolesLength = response.data.roles.length;
        console.log(("rolee", rolesLength));

        if (response.status === 200) {
          Cookies.set("jwt_Token", accessToken, { expires: 1 });
          if (rolesLength === 0 || rolesLength === 1) {
            window.open(`http://localhost:3004/?${accessToken}`);
          } else {
            navigate("/home");
          }
        }
      })
      .catch((error) => {
        console.log(error.response);
        setShowError({ showError: true });
        if (error.response.status !== 200) {
          setShowError({ showError: true });
        }
      });
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  //  --------------------------------------------------------------// return---------------------------------------------------------------------------------------
  return (
    <>
      <div className="main_container">
        <div className="first-container">
          <h1>Edpedia</h1>
          <h3>
            <span>Unified Login Portal</span>
          </h3>
        </div>
        <div className="second_container">
          <p>Demo School</p>
          <Form
            name="basic"
            labelCol={{
              span: 8,
            }}
            wrapperCol={{
              span: 16,
            }}
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              label="Username"
              name="username"
              rules={[
                {
                  required: true,
                  message: "Please input your username!",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item
              name="remember"
              valuePropName="checked"
              wrapperCol={{
                offset: 8,
                span: 16,
              }}
            >
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item
              wrapperCol={{
                offset: 8,
                span: 16,
              }}
            >
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
              {showError && (
                <h5 className="errorMsg">
                  *UserName and Password didn't match
                </h5>
              )}
            </Form.Item>
          </Form>
        </div>
      </div>
    </>
  );
};
export default Login;
