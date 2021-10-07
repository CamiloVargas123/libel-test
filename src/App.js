import Header from "./components/Header/Header";
import Slider from "./components/Slider/Slider";
import Content from "./components/Content/Content";
import Footer from "./components/Footer/Footer";

import "./App.css"

function App() {
  return (
    <div className="App">
      <Header />
      <Slider />
      <main>
        <Content />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
