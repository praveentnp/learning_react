import React from "react";
import "./App.css";

function user() {
  return "Praveen ", 456;
}

console.log(user());

let author = "Praveen Kumar";
let isLoggedIn = false;

function App() {
  return (
    <React.Fragment>
      <h1 style={{ color: "white", backgroundColor: "blue" }}> React JSX </h1>

      <div>
        <h4>Welcome to React JSX</h4>
      </div>

      <p>Author: {author}</p>
      {isLoggedIn ? <p>Status: Logged In {author} </p> : <p>Status: Guest</p>}
      <label htmlFor="name">Name : </label>

      <input type="text" placeholder="Enter your name" />

      {/* <button onClick={newFun}>Click Me</button> */}
      <>
        <h1>Next episode - Component</h1>
      </>
    </React.Fragment>
  );
}

export default App;
