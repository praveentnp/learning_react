import { use } from "react";
import { Content } from "./components/Content";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { useState } from "react";
import { createContext } from "react";

export const UserContext = createContext();
// Compare this snippet from learning_react/ep-9-context-api/src/App.jsx:

function App() {
  let [user, setUser] = useState({
    name: "Praveen Kumar",
    description: "From Context API - Praveen Kumar",
    age: 30,
    email: "praveen.kumar@example.com",
  });
  // This is the user state that will be shared across components using Context API
  return (
    <UserContext.Provider value={{ user }}>
      <div className="App">
        <Header />
        <br />
        <Content />
        <br />
        <Footer />
      </div>
    </UserContext.Provider>
  );
}

export default App;
