import "./Bulb.css";

function Bulb({ isOn, label }) {
  return (
    <div className="bulb-box">
      <div className={`bulb ${isOn ? "on" : "off"}`}></div>
      <p>{label}</p>
    </div>
  );
}

export default Bulb;
