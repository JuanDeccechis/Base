import Router from './pages/Router';
import "./App.css";


function App() {
  localStorage.setItem("plan", JSON.stringify({id: 0, title: "Básico", description: "Por defecto", price: 0}));
  return (
    <div className="app">
      <Router />
    </div>
  );
}

export default App;
