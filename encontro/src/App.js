
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//layout
import Container from "./components/layout/Container"

//pages
import Welcome from './components/pages/Welcome';
import Inscrito from  './components/pages/Inscrito'
import Footer from './components/layout/Footer';
import Estrutura from './components/form/Estructure';

function App() {

  return (
    <Router>
      <Container customClass="minHeight">
        <Routes>
          <Route path='/' element={<Welcome />} />
          <Route path='/Inscrito' element={<Inscrito />} />
          <Route path='/Estructure' element={<Estrutura />} />
        </Routes>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;
