import Header from "./components/Header/Header";
import Slider from "./components/Slider/Slider";
import Content from "./components/Content/Content";
import "./App.css"

function App() {
  return (
    <div className="App">
      <Header />
      <Slider />
      <main>
        <Content />
      </main>
    </div>
  );
}

export default App;
