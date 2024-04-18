import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './home';
import Login from './login';
import './App.css';
import { useEffect, useState } from 'react';


function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
      event.preventDefault();
      console.log('Attempting to log in with', username, password);
      // Add your login logic here
  };

  return (
      <div className="mainContainer">
          <div className="titleContainer">
              <h1>Flow</h1>
          </div>
          <form onSubmit={handleSubmit}>
              <div className="inputContainer">
                  <input
                      type="text"
                      id="username"
                      className="inputBox"
                      placeholder="Login"
                      value={username}
                      onChange={e => setUsername(e.target.value)}
                  />
              </div>
              <div className="inputContainer">
                  <input
                      type="password"
                      id="password"
                      className="inputBox"
                      placeholder="Senha"
                      value={password}
                      onChange={e => setPassword(e.target.value)}
                  />
              </div>
              <input type="submit" value="Entrar" className="loginButton" />
          </form>
          <div>
              <img src="Logo Talst-04.png" alt="Logo" />
          </div>
      </div>
  );
}

export default App;