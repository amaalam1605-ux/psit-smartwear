import { useState } from "react";

function EmergencySOS({ onBack }) {
  const [status, setStatus] = useState("ready");

  const startSOS = () => {
    setStatus("confirm");
  };

  const cancelSOS = () => {
    setStatus("ready");
  };

  const sendSOS = () => {
    setStatus("sending");

    setTimeout(() => {
      setStatus("sent");
    }, 1500);
  };

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
          🚨
        </span>

        <h1>
          Emergency SOS
        </h1>

        <p>
          Campus emergency assistance
        </p>

      </div>

      {/* READY STATE */}

      {status === "ready" && (
        <div className="sos-panel">

          <div className="sos-warning">
            🚨
          </div>

          <h2>
            Emergency Assistance
          </h2>

          <p>
            Use SOS only during a genuine
            emergency.
          </p>

          <button
            className="send-sos"
            onClick={startSOS}
          >
            SEND SOS
          </button>

          <div className="sos-info">

            <span>
              📍 Campus Location
            </span>

            <span>
              👤 Student Identity
            </span>

            <span>
              📞 Emergency Contact
            </span>

          </div>

        </div>
      )}

      {/* CONFIRM STATE */}

      {status === "confirm" && (
        <div className="sos-panel">

          <div className="sos-warning">
            ⚠️
          </div>

          <h2>
            Confirm Emergency
          </h2>

          <p>
            Are you sure you want to send
            an emergency alert?
          </p>

          <div className="sos-actions">

            <button
              className="cancel-sos"
              onClick={cancelSOS}
            >
              CANCEL
            </button>

            <button
              className="confirm-sos"
              onClick={sendSOS}
            >
              CONFIRM SOS
            </button>

          </div>

        </div>
      )}

      {/* SENDING STATE */}

      {status === "sending" && (
        <div className="sos-panel">

          <div className="sos-loading">
            📡
          </div>

          <h2>
            Sending Alert...
          </h2>

          <p>
            Connecting to campus emergency
            services.
          </p>

        </div>
      )}

      {/* SENT STATE */}

      {status === "sent" && (
        <div className="sos-panel sos-success">

          <div className="sos-success-icon">
            ✓
          </div>

          <h2>
            SOS Alert Sent
          </h2>

          <p>
            Emergency assistance has been
            notified.
          </p>

          <div className="alert-details">

            <div>
              <span>Status</span>
              <strong>ACTIVE</strong>
            </div>

            <div>
              <span>Student</span>
              <strong>Sameer Alam</strong>
            </div>

            <div>
              <span>Location</span>
              <strong>PSIT Campus</strong>
            </div>

          </div>

          <button
            className="back-home-sos"
            onClick={onBack}
          >
            RETURN TO WATCH
          </button>

        </div>
      )}

    </div>
  );
}

export default EmergencySOS;