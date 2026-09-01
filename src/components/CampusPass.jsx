import { useState } from "react";

function CampusPass({ onBack }) {
  const [verified, setVerified] = useState(false);

  const verifyPass = () => {
    setVerified(true);

    setTimeout(() => {
      setVerified(false);
    }, 3000);
  };

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
          🎫
        </span>

        <h1>
          Campus Pass
        </h1>

        <p>
          Digital campus access
        </p>

      </div>

      <div className="campus-pass">

        <div className="pass-top">

          <div>
            <span className="pass-label">
              PSIT
            </span>

            <strong>
              DIGITAL CAMPUS PASS
            </strong>
          </div>

          <span className="pass-status">
            ● ACTIVE
          </span>

        </div>

        <div className="pass-student">

          <div className="pass-avatar">
            SA
          </div>

          <div>
            <h2>
              Sameer Alam
            </h2>

            <p>
              BBA • 2nd Year
            </p>

            <small>
              PSIT Student
            </small>
          </div>

        </div>

        <div className="qr-container">

          <div className="fake-qr">

            <div className="qr-corner top-left" />
            <div className="qr-corner top-right" />
            <div className="qr-corner bottom-left" />

            <div className="qr-pattern">
              PSIT
            </div>

          </div>

          <p>
            Scan for campus verification
          </p>

        </div>

        <div className="pass-details">

          <div>
            <span>STUDENT ID</span>
            <strong>PSIT-BBA-2026</strong>
          </div>

          <div>
            <span>STATUS</span>
            <strong>VERIFIED STUDENT</strong>
          </div>

        </div>

      </div>

      <button
        className="verify-pass"
        onClick={verifyPass}
      >
        {verified
          ? "✓ PASS VERIFIED"
          : "VERIFY CAMPUS PASS"}
      </button>

      {verified && (
        <div className="verification-message">
          ✓ Student identity verified successfully
        </div>
      )}

    </div>
  );
}

export default CampusPass;