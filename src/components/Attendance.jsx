import attendance from "../data/attendance";

function Attendance({ onBack }) {
  const attended = attendance.attendedLectures;
  const absent = attendance.absentLectures;
  const total = attendance.totalLectures;
  const percentage = attendance.overall;

  return (
    <div className="feature-screen">

      {/* BACK BUTTON */}
      <button
        className="back-button"
        onClick={onBack}
      >
        ← Back
      </button>

      {/* HEADER */}
      <div className="feature-header">

        <span className="feature-icon">
          📊
        </span>

        <h1>
          Attendance
        </h1>

        <p>
          BBA • 3rd Semester
        </p>

      </div>

      {/* ATTENDANCE CHART */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "20px 0",
        }}
      >

        <div
          style={{
            width: "170px",
            height: "170px",
            borderRadius: "50%",
            background: `conic-gradient(
              #39d98a 0% ${percentage}%,
              #ff5252 ${percentage}% 100%
            )`,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            boxShadow: "0 0 25px rgba(57, 217, 138, 0.15)",
          }}
        >

          {/* INNER CIRCLE */}
          <div
            style={{
              width: "125px",
              height: "125px",
              borderRadius: "50%",
              background: "#111827",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >

            <strong
              style={{
                fontSize: "26px",
                color: "#ffffff",
              }}
            >
              {percentage}%
            </strong>

            <span
              style={{
                fontSize: "11px",
                color: "#aaaaaa",
                marginTop: "4px",
              }}
            >
              ATTENDANCE
            </span>

          </div>

        </div>

      </div>

      {/* ATTENDANCE SUMMARY */}
      <div className="section-title">
        ATTENDANCE SUMMARY
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "10px",
          marginTop: "12px",
        }}
      >

        {/* ATTENDED */}
        <div
          style={{
            background: "rgba(57, 217, 138, 0.12)",
            borderRadius: "12px",
            padding: "12px",
            textAlign: "center",
          }}
        >

          <strong
            style={{
              display: "block",
              fontSize: "22px",
            }}
          >
            {attended}
          </strong>

          <span
            style={{
              fontSize: "11px",
              opacity: "0.7",
            }}
          >
            ATTENDED
          </span>

        </div>

        {/* ABSENT */}
        <div
          style={{
            background: "rgba(255, 82, 82, 0.12)",
            borderRadius: "12px",
            padding: "12px",
            textAlign: "center",
          }}
        >

          <strong
            style={{
              display: "block",
              fontSize: "22px",
            }}
          >
            {absent}
          </strong>

          <span
            style={{
              fontSize: "11px",
              opacity: "0.7",
            }}
          >
            ABSENT
          </span>

        </div>

        {/* OAA */}
        <div
          style={{
            background: "rgba(255, 193, 7, 0.12)",
            borderRadius: "12px",
            padding: "12px",
            textAlign: "center",
          }}
        >

          <strong
            style={{
              display: "block",
              fontSize: "22px",
            }}
          >
            {attendance.oaaLectures}
          </strong>

          <span
            style={{
              fontSize: "11px",
              opacity: "0.7",
            }}
          >
            OAA
          </span>

        </div>

        {/* TOTAL */}
        <div
          style={{
            background: "rgba(255,255,255,0.08)",
            borderRadius: "12px",
            padding: "12px",
            textAlign: "center",
          }}
        >

          <strong
            style={{
              display: "block",
              fontSize: "22px",
            }}
          >
            {total}
          </strong>

          <span
            style={{
              fontSize: "11px",
              opacity: "0.7",
            }}
          >
            TOTAL
          </span>

        </div>

      </div>

    </div>
  );
}

export default Attendance;