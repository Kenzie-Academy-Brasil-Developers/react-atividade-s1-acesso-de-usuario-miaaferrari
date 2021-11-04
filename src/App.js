import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { RestrictedPage } from './components/RestrictedPage';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const user = 'Mia';

  const login = () => {
    setIsLoggedIn(true);
  }

  const logout = () => {  
    setIsLoggedIn(false);
  }

  return (
    <div className="App">
      <div className="App-header">
        <RestrictedPage isLogged={isLoggedIn} user={user} login={login} logout={logout}  />
      </div>
    </div>
  );
}

export default App;
