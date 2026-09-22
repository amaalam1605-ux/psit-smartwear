function StudentID({ onBack }) {
  return (
    <div className="screen">

      {/* HEADER */}
      <div className="screen-header">
        <button
          className="back-btn"
          onClick={onBack}
        >
          ←
        </button>

        <h2>Student ID</h2>
      </div>

      {/* ID CARD */}
      <div className="id-card">

        <div className="id-logo">
          PSIT
        </div>

        <div className="id-avatar">
          SA
        </div>

        <h2>Sameer Alam</h2>

        <p className="id-course">
          BBA
        </p>

        <div className="id-details">

          <div>
            <span>Student ID</span>
            <strong>25262102460</strong>
          </div>

          <div>
            <span>Year</span>
            <strong>2nd Year</strong>
          </div>

          <div>
            <span>Semester</span>
            <strong>3rd Semester</strong>
          </div>

          <div>
            <span>Institute</span>
            <strong>PSIT</strong>
          </div>

        </div>

        <div className="id-status">
          ● ACTIVE STUDENT
        </div>

      </div>

      {/* BACK */}
      <button
        className="secondary-btn"
        onClick={onBack}
      >
        Back to Home
      </button>

    </div>
  );
}

export default StudentID;