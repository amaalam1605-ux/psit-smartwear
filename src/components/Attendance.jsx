import attendance from "../data/attendance";

function Attendance({ onBack }) {
  return (
    <div className="feature-screen">

      <button
        className="back-button"
        onClick={onBack}
      >
        ← Back
      </button>

      <div className="feature-header">

        <span className="feature-icon">
          📊
        </span>

        <h1>
          Attendance
        </h1>

        <p>
          Academic attendance
        </p>

      </div>

      {/* OVERALL ATTENDANCE */}

      <div className="attendance-overall">

        <div className="attendance-circle">

          <strong>
            {attendance.overall}%
          </strong>

          <span>
            Overall
          </span>

        </div>

        <div className="attendance-summary">

          <span>
            Total Attendance
          </span>

          <strong>
            Good Standing
          </strong>

          <small>
            Keep attending classes regularly
          </small>

        </div>

      </div>

      {/* SUBJECTS */}

      <div className="section-title">
        SUBJECT WISE
      </div>

      <div className="attendance-list">

        {attendance.subjects.map((subject) => {

          const isLow = subject.percentage < 75;

          return (
            <div
              className={`attendance-card ${
                isLow ? "low-attendance" : ""
              }`}
              key={subject.id}
            >

              <div className="attendance-card-top">

                <div>
                  <h2>
                    {subject.name}
                  </h2>

                  <p>
                    {subject.attended} / {subject.total} classes
                  </p>
                </div>

                <strong>
                  {subject.percentage}%
                </strong>

              </div>

              <div className="attendance-bar">

                <div
                  className="attendance-progress"
                  style={{
                    width: `${subject.percentage}%`,
                  }}
                />

              </div>

              {isLow && (
                <div className="attendance-warning">
                  ⚠️ Low attendance
                </div>
              )}

            </div>
          );

        })}

      </div>

    </div>
  );
}

export default Attendance;