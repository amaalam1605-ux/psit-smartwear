import { useState } from "react";
import timetable from "../data/timetable";

function Classes({ onBack }) {
  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
  ];

  const [selectedDay, setSelectedDay] = useState("Monday");

  const todayClasses = timetable.filter(
    (item) => item.day === selectedDay
  );

  const nextClass = todayClasses[0];

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
          📚
        </span>

        <h1>
          Classes
        </h1>

        <p>
          BBA • 3rd Semester
        </p>

      </div>

      {/* DAY SELECTOR */}
      <div
        style={{
          display: "flex",
          gap: "6px",
          overflowX: "auto",
          padding: "8px 0 12px",
          marginBottom: "8px",
        }}
      >

        {days.map((day) => (

          <button
            key={day}
            onClick={() => setSelectedDay(day)}
            style={{
              flex: "0 0 auto",
              border: "none",
              borderRadius: "10px",
              padding: "8px 12px",
              fontSize: "12px",
              fontWeight: "700",
              cursor: "pointer",
              background:
                selectedDay === day
                  ? "#ffffff"
                  : "rgba(255,255,255,0.12)",
              color:
                selectedDay === day
                  ? "#111111"
                  : "#ffffff",
            }}
          >
            {day.slice(0, 3)}
          </button>

        ))}

      </div>

      {/* SELECTED DAY */}
      <div className="section-title">
        {selectedDay.toUpperCase()} • 8 LECTURES
      </div>

      {/* NEXT CLASS */}
      {nextClass && (

        <div className="next-class">

          <div className="next-label">
            FIRST CLASS
          </div>

          <h2>
            {nextClass.code}
          </h2>

          <div className="next-info">

            <span>
              🕐 {nextClass.time}
            </span>

            <span>
              🚪 {nextClass.room}
            </span>

          </div>

          <p
            style={{
              marginTop: "8px",
              opacity: "0.8",
              fontSize: "12px",
            }}
          >
            {nextClass.teacher}
          </p>

        </div>

      )}

      {/* DAILY SCHEDULE */}
      <div className="section-title">
        DAILY SCHEDULE
      </div>

      <div className="timetable">

        {todayClasses.map((item, index) => (

          <div
            className="class-item"
            key={item.id}
          >

            {/* PERIOD + TIME */}
            <div className="class-time">

              <strong>
                {index + 1}ᵗʰ
              </strong>

              <span>
                {item.time}
              </span>

              <span>
                {item.endTime}
              </span>

            </div>

            {/* CLASS INFORMATION */}
            <div className="class-info">

              <h3>
                {item.code}
              </h3>

              <p>
                {item.teacher}
              </p>

              <small>
                Room {item.room}
              </small>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}

export default Classes;