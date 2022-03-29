import React, { useEffect, useState } from "react";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";
import "./styles/App.css";
const App: React.FC = () => {
  const [darkMode, setDark] = useState(false);
  useEffect(() => {
    const body = document.getElementById("body") as HTMLBodyElement;
    if (darkMode) {
      return body.classList.add("dark");
    }
    return body.classList.remove("dark");
  }, [darkMode]);
  return (
    <div className="mainLoginContainer">
      <span
        className="theme"
        onClick={() => {
          setDark(!darkMode);
        }}
      >
        {darkMode ? <BsFillSunFill /> : <BsFillMoonFill />}
      </span>
      <form className="mainFormulary"></form>
    </div>
  );
};

export default App;

