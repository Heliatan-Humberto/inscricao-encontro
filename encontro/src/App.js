import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Estrutura from "./components/form/Estructure";
import Container from "./components/layout/Container";


function App() {

  return (
    <Router>
      <Container customClass="minHeight">
        <Estrutura />
      </Container>
    </Router>
  );
}

export default App;
