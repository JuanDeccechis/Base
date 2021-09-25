import Router from './pages/Router';
import "./App.css";


function App() {
  localStorage.setItem("plan", JSON.stringify({id: 0, title: "Básico", description: "Por defecto", price: 0}));
  localStorage.setItem("isLogged", "false");
  localStorage.setItem("APIURL", "http://localhost:3000");
  localStorage.setItem("serverEnabled", "false");
  return (
    <div className="app">
      <Router />
    </div>
  );
}

export default App;
