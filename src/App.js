import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { RestrictedPage } from './components/RestrictedPage';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const user = 'Mia';

  const Login = () => {
    setIsLoggedIn(true);
  }

  const Logout = () => {
    setIsLoggedIn(false);
  }

  return (
    <div className="App">
      <div className="App-header">
        <RestrictedPage isLogged user={user}  />
      </div>
    </div>
  );
}

export default App;
