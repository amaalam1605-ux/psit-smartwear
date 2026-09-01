import { useEffect, useState } from "react";

function WatchHome({ onNavigate }) {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = () => {
    return time.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const formatDate = () => {
    return time.toLocaleDateString("en-IN", {
      weekday: "short",
      day: "2-digit",
      month: "short",
    });
  };

  return (
    <>
      {/* TOP BAR */}
      <div className="watch-top">
        <span className="brand">
          PSIT
        </span>

        <span className="battery">
          🔋 87%
        </span>
      </div>

      {/* CLOCK */}
      <div className="clock">
        <h1>
          {formatTime()}
        </h1>

        <p>
          {formatDate()}
        </p>
      </div>

      {/* STUDENT */}
      <div className="student">
        <div className="avatar">
          SA
        </div>

        <div>
          <h2>
            Sameer Alam
          </h2>

          <p>
            BBA • 2nd Year
          </p>
        </div>
      </div>

      {/* MENU */}
      <div className="menu">

        <button
          onClick={() => onNavigate("id")}
        >
          <span>🪪</span>
          <small>ID</small>
        </button>

        <button
          onClick={() => onNavigate("classes")}
        >
          <span>📚</span>
          <small>Classes</small>
        </button>

        <button
          onClick={() => onNavigate("notice")}
        >
          <span>🔔</span>
          <small>Notice</small>
        </button>

        <button
          onClick={() => onNavigate("attendance")}
        >
          <span>📊</span>
          <small>Attend</small>
        </button>

        <button
          onClick={() => onNavigate("pass")}
        >
          <span>🎫</span>
          <small>Pass</small>
        </button>

      </div>

      {/* SOS */}
      <button
        className="sos"
        onClick={() => onNavigate("sos")}
      >
        🚨 EMERGENCY SOS
      </button>

      {/* STATUS */}
      <div className="watch-status">

        <span>
          ● Connected
        </span>

        <span>
          Wi-Fi
        </span>

      </div>
    </>
  );
}

export default WatchHome;