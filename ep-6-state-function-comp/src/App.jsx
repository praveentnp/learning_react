import { Content } from "./components/Content";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  let name = "Praveen";
  let age = 30;
  return (
    <div className="App">
      <Header name={name} age={age} />
      <br />
      <Content />
      <br />
      <Footer user="Kumar" />
    </div>
  );
}

export default App;
