import "./App.css";
import Description from "./components/Description";
import Image from "./components/Image";
import Name from "./components/Name";
import Price from "./components/Price";
import './Style.css'

function App() {
  return (
    <div className="App">
      <Name />
      <Image />
      <Description />
      <Price />
    </div>
  );
}

export default App;
