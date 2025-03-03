import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Mission from "./components/Mission.jsx";
import { Projects } from "./components/Projects.jsx";

const App = () => {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <Mission />
      <Projects />
    </main>
  );
};

export default App;
