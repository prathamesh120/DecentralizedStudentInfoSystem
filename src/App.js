//import logo from './logo.svg';
import AEC from './background/AEC.jpg'
import "./App.css";
import { Header } from "./component/Header/Header.js";
import { Login } from "./component/Login/Login.js";

function App() {
  return (
    <div className="App" style={{background: `url(${AEC})`, backgroundSize:'110%'}  }>
      <Header />
      <div>
      <Login/>
      </div>
      
    </div>
  );
}

export default App;
