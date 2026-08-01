import UserCard from "./components/UserCard";
import Mercedes from "../public/Mercedes.png";
import bird from "../public/bird.png";
import "./App.css";

function App() {
  return (
    <div className="container">
      <UserCard
        name="Mercedes"
        desc="This is a Mercedes Car"
        image={Mercedes}
        style={{ "border-radius": "500px" }}
      />
      <UserCard
        name="Bird"
        desc="Bird is Flying"
        image={bird}
        style={{ "border-radius": "500px" }}
      />
    </div>
  );
}

export default App;
