import { useState } from "react";
import "./App.css";

import WatchHome from "./components/WatchHome.jsx";
import StudentID from "./components/StudentID.jsx";
import Classes from "./components/Classes.jsx";
import Notifications from "./components/Notifications.jsx";
import Attendance from "./components/Attendance.jsx";
import EmergencySOS from "./components/EmergencySOS.jsx";
import CampusPass from "./components/CampusPass.jsx";

function App() {
  const [screen, setScreen] = useState("home");

  const navigate = (nextScreen) => {
    setScreen(nextScreen);
  };

  const goHome = () => {
    setScreen("home");
  };

  return (
    <div className="app">
      <div className="watch">

        {screen === "home" && (
          <WatchHome onNavigate={navigate} />
        )}

        {screen === "id" && (
          <StudentID onBack={goHome} />
        )}

        {screen === "classes" && (
          <Classes onBack={goHome} />
        )}

        {screen === "notice" && (
          <Notifications onBack={goHome} />
        )}

        {screen === "attendance" && (
          <Attendance onBack={goHome} />
        )}

        {screen === "sos" && (
          <EmergencySOS onBack={goHome} />
        )}

        {screen === "pass" && (
          <CampusPass onBack={goHome} />
        )}

      </div>
    </div>
  );
}

export default App;