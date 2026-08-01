import { useState } from "react";
import "./App.css";
import Bulb from "./components/Bulb";

function App() {
  const [isBulbOneOn, setIsBulbOneOn] = useState(true);

  const toggleBulbs = () => {
    setIsBulbOneOn(!isBulbOneOn);
  };

  return (
    <div className="container">
      <div className="card">
        <h1>Bulb Toggle using useState</h1>

        <div className="bulb-container">
          <Bulb isOn={isBulbOneOn} label="Bulb 1" />
          <Bulb isOn={!isBulbOneOn} label="Bulb 2" />
        </div>

        <button className="switch-btn" onClick={toggleBulbs}>
          Switch Bulbs
        </button>
      </div>
    </div>
  );
}

export default App;
