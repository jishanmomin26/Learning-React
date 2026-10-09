import { Link, useParams } from "react-router-dom";
import "./StudentDetails.css";

const students = {
  1: {
    name: "Rahul Sharma",
    course: "Computer Engineering",
    year: "Third Year",
    email: "rahul@example.com",
  },

  2: {
    name: "Priya Patil",
    course: "Information Technology",
    year: "Third Year",
    email: "priya@example.com",
  },

  3: {
    name: "Aman Khan",
    course: "Computer Engineering",
    year: "Second Year",
    email: "aman@example.com",
  },

  4: {
    name: "Sneha More",
    course: "Artificial Intelligence",
    year: "Third Year",
    email: "sneha@example.com",
  },
};

function StudentDetails() {
  const { id } = useParams();

  const student = students[id];

  if (!student) {
    return (
      <section className="student-details-page">
        <div className="not-found-card">
          <h1>Student Not Found</h1>

          <p>
            No student exists with ID {id}.
          </p>

          <Link to="/students">
            ? Back to Students
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="student-details-page">

      <div className="details-card">

        <div className="details-avatar">
          {student.name.charAt(0)}
        </div>

        <span className="details-label">
          STUDENT ID: {id}
        </span>

        <h1>{student.name}</h1>

        <div className="details-info">

          <div>
            <span>Course</span>
            <strong>{student.course}</strong>
          </div>

          <div>
            <span>Year</span>
            <strong>{student.year}</strong>
          </div>

          <div>
            <span>Email</span>
            <strong>{student.email}</strong>
          </div>

        </div>

        <Link
          to="/students"
          className="back-button"
        >
          ? Back to Students
        </Link>

      </div>

    </section>
  );
}

export default StudentDetails;
