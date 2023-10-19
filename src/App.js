import './App.css';
import Login from './Pages/Login';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Login />
      </div>
    </BrowserRouter>
  );
}

export default App;
