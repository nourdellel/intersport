// import logo from "./logo.svg";
import "./App.css";
import BonPlan from "./components/homePage/bonPlan/bonPlan";
import Frame100 from "./components/homePage/frame100/frame100";
import Frame100Carousel from "./components/homePage/frame100/frame100Carousel";
import Nav from "./components/homePage/nav/nav";

function App() {
  return (
    <div className="App">
      <Frame100 />
      <Frame100Carousel />
      <Nav />
      <BonPlan />
    </div>
  );
}

export default App;
