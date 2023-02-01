import React from "react";
import { Button } from "antd";
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie'

const Home = () => {
  const navigate = useNavigate()
  const getToken = Cookies.get("jwt_Token");


    const onClickAdmin = (e) => {
      e.preventDefault()
      if(getToken){
        window.open(`http://localhost:3006/?accessToken=${getToken}`)
      } 
    };

    const onClickStudent = () => {
      if (getToken) {
        window.open(`http://localhost:3004/?accessToken=${getToken}`);
      }
    };

    const onClickStaff = () => {
      if (getToken) {
        window.open(`http://localhost:3006/home?accessToken=${getToken}`);
      }
    };
// ---------------------------------------------------LogOut--------------------------------------------

  const logotFunction = () => {
    Cookies.remove("jwt_Token");
    navigate("/");
  };

  return (
    <>
      <div
        className="site-card-border-less-wrapper"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
        }}
      >
        <Button
          type="primary"
          style={{
            margin: "40px",
            width: "500px",
            height: "300px",
            fontSize: "40px",
          }}
          onClick={onClickAdmin}
        >
          Admin
        </Button>
        <Button
          type="primary"
          style={{
            margin: "40px",
            width: "500px",
            height: "300px",
            fontSize: "40px",
          }}
          onClick={onClickStudent}
        >
          Student
        </Button>
        <Button
          type="primary"
          style={{
            margin: "40px",
            width: "500px",
            height: "300px",
            fontSize: "40px",
          }}
          onClick={onClickStaff}
          
        >
          Staff
        </Button>
      </div>
      <div>
        <Button
          type="primary"
          style={{
            margin: "40px",
            width: "100px",
            height: "50px",
            fontSize: "14px",
          }}
          onClick={logotFunction}
        >
          Logout
        </Button>
      </div>
    </>
  );
};
export default Home;
