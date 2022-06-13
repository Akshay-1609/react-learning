import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import { useState } from "react";
import TextForm from "./components/TextForm";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App(props) {
  const [Mode, setMode] = useState("light");
  const [bgColor, setbgColor] = useState("#ffffff");

  const toggleMode = () => {
    if (Mode === "dark") {
      setMode("light");
    } else {
      setMode("dark");
    }
  };
  return (
    <>
      <Router>
        <Navbar
          title="TextUtils"
          mode={Mode}
          toggleMode={toggleMode}
          setBgColor={setbgColor}
        />

        <div
          className="container  my-3 "
          style={{
            backgroundColor: bgColor,
          }}
        >
          <Routes>
            <Route path="/about" element={<About />}></Route>
            <Route
              path="/"
              element={<TextForm heading="Enter The text to analyze" />}
            ></Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
