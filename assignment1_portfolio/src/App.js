import Navbar from "./components/NavBar/navbar";
import Intro from "./components/Intro/intro";
import About from "./components/About/about";
import Projects from "./components/Projects/projects";
import Services from "./components/Services/services";


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <About/>
      <Projects/>
      <Services/>
    </div>
  );
}

export default App;
