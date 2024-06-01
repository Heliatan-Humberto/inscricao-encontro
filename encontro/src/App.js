import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';

import Home from './layout/Home';

function App() {
  return (
    <Router>
        <Switch>
          <Route path='/' element={<Home />} />
        </Switch>
    </Router>
  );
}

export default App;
