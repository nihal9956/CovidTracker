import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Cards from './Components/Cards';



function App() {
  return (
    <div className="App">
      <div style={{ backgroundColor: "black", padding: "2rem 0" }}>
        <h1 style={{ textAlign: "center", marginTop: "2rem", color: "#40E0FC" }}>COVID 19 Tracker App</h1>
      </div>
      <Cards />
      
    </div>
  );
}

export default App;
