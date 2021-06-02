import "./App.css";
//Components
import { Header, NavBar } from "./components";
import navigation from "./navigation";

function App() {
  return (
    <div className="App">
      <Header />
      <NavBar content={navigation} />
      {navigation.map((page) => page.component)}
    </div>
  );
}

export default App;
