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

  let [count, setCount] = useState(0);

  function handleIncrease() {
    setCount((prevCount) => prevCount + 1);
  }

  function handleDecrease() {
    setCount((prevCount) => prevCount - 1);
  }

  let [reward, setReward] = useState(0);
  let message;
  if (reward >= 5 && reward < 10) {
    message = (
      <div>
        <p>You clicked {reward} times</p>
        <p>Congratulations! You have unlocked a 10% discount.</p>
      </div>
    );
  } else if (reward >= 10) {
    message = (
      <div>
        <p>You clicked {reward} times</p>
        <p>You Rocked! You have unlocked a 20% discount.</p>
      </div>
    );
  } else if (reward < 5) {
    message = (
      <div>
        <p>You clicked {reward} times</p>
        <p>
          No discount applicable, click Claim Reward {5 - reward} to get rewards
        </p>
      </div>
    );
  } else {
    message = <p>You clicked {reward} times</p>;
  }

  let [data, setData] = useState("loading");

  let displayComponent = () => {
    switch (data) {
      case "loading":
        return <Loading />;
        break;
      case "success":
        return <Success />;
        break;
      case "error":
        return <Error />;
        break;
    }
  };

  function handleClaimReward() {
    setReward((prevReward) => prevReward + 1);
    console.log("Reward claimed! Current reward count:", reward);
  }

  return (
    <div>
      <main>
        <h1 style={headingStyle}>Main Content - {count} </h1>
        <br />
        {count >= 5 ? (
          <p>Unlock 10% discount</p>
        ) : count < 0 ? (
          <p>No discount applicable</p>
        ) : null}
        <br />
        {/* other way to handle setState 
      <Button onClick={() => setCount(count + 1)}>Increase</Button>
      <Button onClick={() => setCount(count - 1)}>Decrease</Button>
      */}
        <Button onClick={handleIncrease}>Increase</Button>
        <Button onClick={handleDecrease}>Decrease</Button>
      </main>
      <div>
        <hr />
        <h2>Conditional Rendering with IF-Else Example</h2>
        <h3>Unlock rewards</h3>
        <Button onClick={handleClaimReward}>Claim Reward</Button>
        {message}
      </div>
      <div>
        <hr />
        <h2>Conditional Rendering with Switch Example</h2>
        <h3>Display Component</h3>
        <Button onClick={() => setData("loading")}>Loading</Button>
        <Button onClick={() => setData("success")}>Success</Button>
        <Button onClick={() => setData("error")}>Error</Button>
        {displayComponent()}
      </div>
    </div>
  );
};

function Loading() {
  return <p>Loading...</p>;
}

function Success() {
  return <p>Data loaded successfully!💕❤️</p>;
}

function Error() {
  return <p>Error loading data!😢</p>;
}
