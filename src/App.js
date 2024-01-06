import "./App.css";
import Navbar from "./components/Navbar";
import AboutMe from "./components/AboutMe";
import Heading from "./components/Heading";
import Info from "./components/Info";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Heading></Heading>
      <div className="App">
        <Info></Info>
        <div>
          <Navbar />
          <Router>
            <Routes>
              <Route path="/">
                <Route index element={<AboutMe />}></Route>
              </Route>
            </Routes>
          </Router>
        </div>
      </div>
    </>
  );
}

export default App;
