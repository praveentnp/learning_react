import React, { useState } from "react";
import styled from "styled-components";
let user = { id: 1, name: "Praveen Kumar", age: 30 };

let Button = styled.button`
  background-color: blue;
  color: white;
  width: 100px;
  height: 50px;

  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: darkblue;
  }
`;

let NewButton = styled(Button)`
  background-color: green;
  box-shadow: 10px 10px 4px black;
`;

export const Content = () => {
  let headingStyle = {
    backgroundColor: "red",
    color: "white",
    fontSize: "24px",
    boxShadow: "10px 10px 4px black",
  };

  let newFunction = () => {
    alert("New Button clicked!");
  };

  let click = (user) => {
    //console.log("Button clicked!");
    console.log(user);
  };

  let clickWithEvent = (e) => {
    //console.log("Button clicked with event!");
    console.log(e);
    console.log(e.target.innerText);
  };

  //let userName = "Praveen Kumar";
  let changeUserName = (user) => {
    //setUserName(user);
    setUserName((prevUserName) => {
      console.log("Previous User Name:", prevUserName);
      return user;
    });
    userName = user;
    console.log("User name changed to:", userName);
  };

  let [userName, setUserName] = useState("Praveen Kumar");

  return (
    <main>
      <h1 style={headingStyle}>Main Content - {userName} </h1>

      <Button onClick={() => changeUserName("Praveen")}>Praveen</Button>
      <Button onClick={() => changeUserName("Sound")}>Sound</Button>
      <Button onClick={() => changeUserName("Square")}>Square</Button>
    </main>
  );
};
