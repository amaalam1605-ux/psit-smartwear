function StudentID({ onBack }) {
  return (
    <div className="feature-screen">

      {/* BACK */}
      <button
        className="back-button"
        onClick={onBack}
      >
        ← Back
      </button>

      {/* HEADER */}
      <div className="feature-header">

        <span className="feature-icon">
          🪪
        </span>

        <h1>
          Student ID
        </h1>

        <p>
          Digital Campus Identity
        </p>

      </div>

      {/* ID CARD */}
      <div className="id-card">

        <div className="id-logo">
          PSIT
        </div>

        <div className="id-photo">
          SA
        </div>

        <h2>
          Sameer Alam
        </h2>

        <p>
          Bachelor of Business Administration
        </p>

        {/* DETAILS */}
        <div className="id-details">

          <div>
            <span>
              Student ID
            </span>

            <strong>
              PSIT-BBA-2026
            </strong>
          </div>

          <div>
            <span>
              Year
            </span>

            <strong>
              2nd Year
            </strong>
          </div>

        </div>

        {/* VERIFIED */}
        <div className="verified">
          ✓ VERIFIED STUDENT
        </div>

      </div>

    </div>
  );
}

export default StudentID;