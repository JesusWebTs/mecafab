import "./App.css";
import { Header, NavBar } from "./components";
import navigation from "./navigation";

function App() {
  return (
    <div className="App">
      <Header />
      <NavBar content={navigation} />
    </div>
  );
}

export default App;
