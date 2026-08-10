import { useState } from "react";
import "./StudentForm.css";

function StudentForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [course, setCourse] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();

    if (name !== "" && email !== "" && course !== "") {
      setSubmitted(true);
    }
  }

  function handleReset() {
    setName("");
    setEmail("");
    setCourse("");
    setSubmitted(false);
  }

  return (
    <div className="container py-5">
      {/* Header */}
      <div className="text-center mb-4">
        <h1 className="fw-bold text-primary">Student Registration</h1>

        <p className="text-muted">
          React Event Handling & Conditional Rendering
        </p>
      </div>

      {/* Registration Card */}
      <div className="row justify-content-center">
        <div className="col-md-7 col-lg-6">
          <div className="card shadow border-0">
            <div className="card-body p-4">
              {submitted ? (
                /* Success Screen */
                <div className="text-center">
                  <div className="success-icon mb-3">✓</div>

                  <h3 className="text-success">Registration Successful!</h3>

                  <p className="text-muted">Welcome to the course, {name}!</p>

                  <div className="alert alert-light border text-start">
                    <p className="mb-2">
                      <strong>Name:</strong> {name}
                    </p>

                    <p className="mb-2">
                      <strong>Email:</strong> {email}
                    </p>

                    <p className="mb-0">
                      <strong>Course:</strong> {course}
                    </p>
                  </div>

                  <button
                    className="btn btn-outline-primary"
                    onClick={handleReset}
                  >
                    Register Another Student
                  </button>
                </div>
              ) : (
                /* Registration Form */
                <form onSubmit={handleSubmit}>
                  <h4 className="mb-4 text-center">Registration Form</h4>

                  {/* Name */}
                  <div className="mb-3">
                    <label className="form-label fw-semibold">
                      Student Name
                    </label>

                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter your name"
                      value={name}
                      onChange={(event) => setName(event.target.value)}
                      required
                    />
                  </div>

                  {/* Email */}
                  <div className="mb-3">
                    <label className="form-label fw-semibold">
                      Email Address
                    </label>

                    <input
                      type="email"
                      className="form-control"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(event) => setEmail(event.target.value)}
                      required
                    />
                  </div>

                  {/* Course */}
                  <div className="mb-4">
                    <label className="form-label fw-semibold">
                      Select Course
                    </label>

                    <select
                      className="form-select"
                      value={course}
                      onChange={(event) => setCourse(event.target.value)}
                      required
                    >
                      <option value="">-- Select Course --</option>

                      <option value="Computer Engineering">
                        Computer Engineering
                      </option>

                      <option value="Information Technology">
                        Information Technology
                      </option>

                      <option value="Artificial Intelligence">
                        Artificial Intelligence
                      </option>
                    </select>
                  </div>

                  {/* Register */}
                  <button type="submit" className="btn btn-primary w-100">
                    Register
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="text-center mt-4">
        <small className="text-muted">
          Experiment 6 – Event Handling & Conditional Rendering
        </small>
      </div>
    </div>
  );
}

export default StudentForm;
