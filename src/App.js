import './App.css';
import Header from './Components/Header';
import Dashboard from './Components/Dashboard';

function App() {
  return (
    <>
      <div className="App">
        <Header/>
        <Dashboard userType="admin"/> 
      </div>
    </>
  );
}

export default App;
