
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//layout
import Container from "./components/layout/Container"

//pages
import Welcome from './components/pages/Welcome';
import Inscrito from  './components/pages/Inscrito'

function App() {

  return (
    <Router>
      <Container customClass="minHeight">
        <Routes>
          <Route path='/' element={<Welcome />} />
          <Route path='/Inscrito' element={<Inscrito />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
