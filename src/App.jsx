import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css"

function App() {
  const students = [
  {
    id: 78,
    name: "JISHAN",
    course: "Computer Engineering",
    marks: 100,
  },
  {
    id: 85,
    name: "Parvez",
    course: "Computer Engineering",
    marks: 100,
  },
  {
    id: 82,
    name: "Owais",
    course: "Computer Engineering",
    marks: 100,
  },
  {
    id: 83,
    name: "Ninjal",
    course: "Information Technology",
    marks: 100,
  },
  {
    id: 105,
    name: "Fuzail",
    course: "Electronics Engineering",
    marks: 81,
  },
  {
    id: 106,
    name: "Ibrahim",
    course: "Mechanical Engineering",
    marks: 95,
  },
];


  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Student List</h1>

      <div className="row">
        {students.map((student) => (
          <div className="col-md-4 mb-3" key={student.id}>
            <div
              className="card shadow p-3"
              onMouseMove={(e) => {
                const card = e.currentTarget;
                const rect = card.getBoundingClientRect();

                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;

                const centerX = rect.width / 2;
                const centerY = rect.height / 2;

                const rotateX =
                  ((y - centerY) / centerY) * -15;

                const rotateY =
                  ((x - centerX) / centerX) * 15;

                const shineX =
                  (x / rect.width) * 100;

                const shineY =
                  (y / rect.height) * 100;

                card.style.transform = `
      perspective(1200px)
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      translateZ(40px)
      scale(1.04)
    `;

                card.style.setProperty(
                  "--mouse-x",
                  `${shineX}%`
                );

                card.style.setProperty(
                  "--mouse-y",
                  `${shineY}%`
                );
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = `
      perspective(1200px)
      rotateX(0deg)
      rotateY(0deg)
      translateZ(0)
      scale(1)
    `;
              }}
            >

              <h4>{student.name}</h4>

              <p>
                <strong>Roll No:</strong> {student.id}
              </p>

              <p>
                <strong>Course:</strong> {student.course}
              </p>

              <p>
                <strong>Marks:</strong> {student.marks}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
