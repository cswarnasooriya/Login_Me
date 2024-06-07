import { useNavigate } from 'react-router-dom';//using Hook
import './App.css';

function App() {

const navigate = useNavigate();

  return (
    <div className="App">
      <header className="App-header">

        <h1>Welcome to Login.Me</h1>
        <button className="users-btn" onClick={()=> navigate('/users')}>Users</button>


      </header>
    </div>
  );
}

export default App;
