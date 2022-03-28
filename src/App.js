import { Button, ButtonGroup, Spinner } from "react-bootstrap";
import "./App.css";
import CardGroup2 from "./components/CardGroup2/CardGroup2";

function App() {
  return (
    <div className="App">
      <ButtonGroup></ButtonGroup>
      <Button variant="danger">Primery</Button>

      <br />
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>

      <CardGroup2></CardGroup2>
    </div>
  );
}

export default App;
