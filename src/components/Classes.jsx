import timetable from "../data/timetable";

function Classes({ onBack }) {
  const nextClass = timetable[0];

  return (
    <div className="feature-screen">

      <button
        className="back-button"
        onClick={onBack}
      >
        ← Back
      </button>

      <div className="feature-header">
        <span className="feature-icon">📚</span>

        <h1>Classes</h1>

        <p>Monday • 31 August</p>
      </div>

      {/* NEXT CLASS */}

      <div className="next-class">

        <div className="next-label">
          NEXT CLASS
        </div>

        <h2>
          {nextClass.subject}
        </h2>

        <div className="next-info">

          <span>
            🕐 {nextClass.time}
          </span>

          <span>
            🚪 {nextClass.room}
          </span>

        </div>

      </div>

      {/* TODAY'S CLASSES */}

      <div className="section-title">
        TODAY'S SCHEDULE
      </div>

      <div className="timetable">

        {timetable.map((item) => (

          <div
            className="class-item"
            key={item.id}
          >

            <div className="class-time">
              <strong>{item.time}</strong>

              <span>
                {item.endTime}
              </span>
            </div>

            <div className="class-info">

              <h3>
                {item.subject}
              </h3>

              <p>
                {item.teacher}
              </p>

              <small>
                {item.code} • {item.room}
              </small>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}

export default Classes;