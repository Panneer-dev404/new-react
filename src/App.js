import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login';
import Welcome from './Wellcome';
import PrivateRoute from './PrivateRoute';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/welcome" 
        element={
          <PrivateRoute>
          <Welcome />
          </PrivateRoute>
        }
        />
      </Routes>
    </Router>
  );
}

export default App;
