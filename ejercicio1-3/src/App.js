import logo from "./logo.svg";
import "./App.css";
import ContactoComponent from "./components/componenteA";

const contacto = {
  name: "John",
  last_name: "Doe",
  email: "JDoe@gmail.com",
  status: true,
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ContactoComponent contacto={contacto}></ContactoComponent>
      </header>
    </div>
  );
}

export default App;
