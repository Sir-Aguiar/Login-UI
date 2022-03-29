import React, { useEffect, useState } from "react";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";
import "./styles/App.css";
const App: React.FC = () => {
  const [darkMode, setDark] = useState(false);
  /* const [userType, setUsertype] = useState<"Professor" | "Student">("Student"); */
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
      <form className="mainFormulary">
        <div className="userType">
          <div className="studentWrapper wrapper">
            <div className="studentModule bg-student"></div>
            <span className="wrapperCaption">Professor</span>
          </div>
          <div className="professorWrapper wrapper">
            <div className="professorModule "></div>
            <span className="wrapperCaption">Aluno</span>
          </div>
        </div>
        <div className="username inputField">
          <input type="text" name="username" id="username" placeholder="Usuário" />
        </div>
        <div className="userpassword inputField">
          <input type="password" name="password" id="password" placeholder="Senha" />
        </div>
        <div className="submitArea">
          <button type="submit">Entrar</button>
        </div>
      </form>
    </div>
  );
};

export default App;

