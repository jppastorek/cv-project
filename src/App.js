import "./App.css";
import Header from "./components/Header";
import Form from "./components/Form";
import Preview from "./components/Preview";

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <Form />
        <Preview />
      </div>
    </>
  );
}

export default App;
