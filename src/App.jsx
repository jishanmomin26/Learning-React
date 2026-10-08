import { useEffect, useState } from "react";
import StudentCard from "./components/StudentCard";
import Loading from "./components/Loading";
import "./App.css";

function App() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("Component Mounted");

    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setStudents(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching students:", error);
        setLoading(false);
      });

    // Cleanup function
    return () => {
      console.log("Component Unmounted");
    };
  }, []);

  return (
    <div className="app-page">

      {/* Main Container */}
      <main className="main-container">

        {/* Header */}
        <header className="page-header">
          <span className="experiment-badge">
            FEWD LAB • REACT EXPERIMENT 8
          </span>

          <h1>
            Student Directory
          </h1>

          <p>
            Student data fetched dynamically using the{" "}
            <span>useEffect Hook</span>
          </p>
        </header>

        {/* Content */}
        {loading ? (
          <Loading />
        ) : (
          <>
            {/* Section Header */}
            <div className="section-header">
              <div>
                <h2>Registered Students</h2>
                <p>
                  Students fetched from the API
                </p>
              </div>

              <div className="student-count">
                {students.length} Students
              </div>
            </div>

            {/* Student Grid */}
            <div className="student-grid">
              {students.map((student) => (
                <StudentCard
                  key={student.id}
                  student={student}
                />
              ))}
            </div>
          </>
        )}

        {/* Footer */}
        <footer className="page-footer">
          Experiment 8 • Lifecycle Management using useEffect
        </footer>

      </main>

    </div>
  );
}

export default App;