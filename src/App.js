import "./App.css";
import About from "./components/About";
import Hero from "./components/Hero";
import Issue from "./components/Issue";
import RegisterAccount from "./components/RegisterAccount";
import { Response } from "./components/Response";
import Settings from "./components/Settings";
import UserPreference from "./components/UserPreference";

function App() {
  return (
    <div className="App">
      <Hero />
      <About />
      <Issue />
      <Response />
      <RegisterAccount />
      <UserPreference />
      <Settings />
    </div>
  );
}

export default App;
