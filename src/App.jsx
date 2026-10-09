import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import About from "./pages/About";
import Students from "./pages/Students";
import StudentDetails from "./pages/StudentDetails";
import Contact from "./pages/Contact";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Navbar />

        <main className="page-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/students" element={<Students />} />
            <Route path="/students/:id" element={<StudentDetails />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <footer className="app-footer">
          <p>React Router Experiment 9 • FEWD Lab</p>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
