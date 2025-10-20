import { useEffect, useState } from "react";
import "./App.css";
import About from "./components/About/About";
import Navbar from "./components/Navbar/Navbar";
const App = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    if (theme === "light") {
      localStorage.setItem("theme", "dark");
      setTheme("dark");
    } else {
      localStorage.setItem("theme", "light");
      setTheme("light");
    }
  };

  useEffect(() => {
    const currentTheme = localStorage.getItem("theme");
    if (currentTheme) {
      setTheme(currentTheme);
    }
  }, []);

  return (
    <div className="app" id={`${theme}`}>
      <main>
        <Navbar toggleTheme={toggleTheme} theme={theme} />
        <About />
      </main>
    </div>
  );
};

export default App;
