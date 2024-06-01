import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Estrutura from "./components/form/Estructure";
import Container from "./components/layout/Container";
import Welcome from './components/pages/Welcome';


function App() {

  return (
    <Router>
      <Container customClass="minHeight">
        <Welcome />
      </Container>
    </Router>
  );
}

export default App;
