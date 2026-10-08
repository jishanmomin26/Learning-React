import "./StudentCard.css";

function StudentCard({ student }) {
  return (
    <article className="student-card">

      {/* Top Gradient Line */}
      <div className="card-top-line"></div>

      {/* Header */}
      <div className="student-header">

        <div className="student-avatar">
          {student.name.charAt(0)}
        </div>

        <div className="student-heading">
          <h3>{student.name}</h3>

          <span>
            Student #{student.id}
          </span>
        </div>

      </div>

      {/* Details */}
      <div className="student-details">

        {/* Email */}
        <div className="student-detail">

          <div className="detail-icon email-icon">
            ✉
          </div>

          <div className="detail-content">
            <span className="detail-label">
              Email
            </span>

            <p>
              {student.email}
            </p>
          </div>

        </div>

        {/* Phone */}
        <div className="student-detail">

          <div className="detail-icon phone-icon">
            ☎
          </div>

          <div className="detail-content">
            <span className="detail-label">
              Phone
            </span>

            <p>
              {student.phone}
            </p>
          </div>

        </div>

        {/* Website */}
        <div className="student-detail">

          <div className="detail-icon website-icon">
            🌐
          </div>

          <div className="detail-content">
            <span className="detail-label">
              Website
            </span>

            <p className="website-text">
              {student.website}
            </p>
          </div>

        </div>

      </div>

    </article>
  );
}

export default StudentCard;