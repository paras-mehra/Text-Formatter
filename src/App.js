import React, { useState } from "react";
// import About from "./Components/About";
import Navbar from "./Components/Navbar";
import TextFrom from "./Components/TextForm";
import Alert from "./Components/Alert";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("info");
      document.body.style.backgroundColor = "#1a1a1a";
      document.body.style.color = "white";
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      showAlert("Light mode has been enabled", "success");
    }
  };
  return (
    <>
      {/* <Router> */}
        <Navbar title="Text Formatter" mode={mode} toggleMode={toggleMode} />
        {/* <Navbar/> */}
        <Alert alert={alert} />
        <TextFrom showAlert={showAlert} heading="Text-Formatter - Words counter, Character counter etc." />
        {/* <Routes> */}
          {/* <Route exact path="/about" element={<About mode={mode} />}></Route> */}
          {/* <Route exact path="/"
            element={
              <TextFrom
                showAlert={showAlert}
                heading="TextUtils - Words counter, Character counter etc."
              />
            }
          ></Route>
        </Routes>
      </Router> */}
    </>
  );
}

export default App;
