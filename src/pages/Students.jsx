import { Link } from "react-router-dom";
import "./Students.css";

const students = [
  {
    id: 1,
    name: "Rahul Sharma",
    course: "Computer Engineering",
    year: "Third Year",
  },
  {
    id: 2,
    name: "Priya Patil",
    course: "Information Technology",
    year: "Third Year",
  },
  {
    id: 3,
    name: "Aman Khan",
    course: "Computer Engineering",
    year: "Second Year",
  },
  {
    id: 4,
    name: "Sneha More",
    course: "Artificial Intelligence",
    year: "Third Year",
  },
];

function Students() {
  return (
    <section className="students-page">

      <div className="students-header">
        <span className="page-badge">STUDENTS</span>

        <h1>Student Directory</h1>

        <p>
          Select a student to view their dynamic
          route using <strong>useParams()</strong>.
        </p>
      </div>

      <div className="students-grid">

        {students.map((student) => (
          <article
            className="student-route-card"
            key={student.id}
          >

            <div className="student-number">
              {student.id}
            </div>

            <h2>{student.name}</h2>

            <p>{student.course}</p>

            <span className="student-year">
              {student.year}
            </span>

            <Link
              to={`/students/${student.id}`}
              className="view-button"
            >
              View Details ?
            </Link>

          </article>
        ))}

      </div>

    </section>
  );
}

export default Students;
