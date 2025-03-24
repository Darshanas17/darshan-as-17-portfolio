import {
  HashRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { useEffect, useState, createContext } from "react";
import { scroller } from "react-scroll";
import "preline/preline";
import Homepage from "./pages/Homepage";

export const AppContext = createContext();

function App() {
  const savedTheme = localStorage.getItem("theme");
  const [theme, setTheme] = useState(savedTheme || "dark");

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  const switchTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <AppContext.Provider value={{ theme, switchTheme }}>
      <Router>
        <ScrollToHashElement />
        <Routes>
          <Route path="/" element={<Homepage />} />
        </Routes>
      </Router>
    </AppContext.Provider>
  );
}

function ScrollToHashElement() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      scroller.scrollTo(location.hash.substring(1), {
        smooth: true,
        duration: 500,
        offset: -50,
      });
    }
  }, [location]);

  return null;
}

export default App;
