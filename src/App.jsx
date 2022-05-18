import React from 'react';
import { Button } from 'react-bootstrap';
import Login from './Components/Login/Login';
import './App.css';
import './App.styles.scss';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Login />
        <Button className="btn-danger">Hola</Button>
      </header>
    </div>
  );
}

export default App;
