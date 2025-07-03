import Header from "./components/Header";
import Hero from "./components/Hero";
import Expertise from "./components/Expertise";
import About from "./components/About";
import { Footer } from "./components/Footer";
import Clientsfeedback from "./components/Clientsfeedback";

function App() {
  return (
    <div className="flex flex-col justify-center">
      <Header />
      <main>
        <Hero />
        <Expertise />
        <About />
        <Clientsfeedback/>
      </main>
      <Footer />
    </div>
  );
}

export default App;
