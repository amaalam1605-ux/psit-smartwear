import notifications from "../data/notifications";

function Notifications({ onBack }) {
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
          🔔
        </span>

        <h1>
          Notifications
        </h1>

        <p>
          PSIT announcements
        </p>

      </div>

      <div className="notification-list">

        {notifications.map((notification) => (

          <div
            className={`notification-card ${notification.type}`}
            key={notification.id}
          >

            <div className="notification-top">

              <span className="notification-icon">
                {notification.type === "urgent"
                  ? "🔴"
                  : notification.type === "academic"
                  ? "📚"
                  : "🟢"}
              </span>

              <span className="notification-time">
                {notification.time}
              </span>

            </div>

            <h2>
              {notification.title}
            </h2>

            <p>
              {notification.message}
            </p>

          </div>

        ))}

      </div>

    </div>
  );
}

export default Notifications;