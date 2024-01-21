import './App.css'
import About from './components/About';
import Hero from "./components/Hero";
import Issue from './components/Issue';
import RegisterAccount from './components/RegisterAccount';
import { Response } from './components/Response';

function App() {
  return (
    <div className="App">
      <Hero />
      <About />
      <Issue />
      <Response />
      <RegisterAccount />

    </div>
  );
}

export default App;
