import "./App.css";
import Navbar from "./components/Navbar";
import AboutMe from "./components/AboutMe";
import Heading from "./components/Heading";
import Info from "./components/Info";
import Contact from "./components/Contact";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Resume from "./components/Resume";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <Heading></Heading>
      <div className="App">
        <Info></Info>
        <div>
          <Router>
            {/* <Navbar /> */}
            <Routes>
              <Route path="/" element={<Navbar />}>
                <Route index path="/" element={<AboutMe></AboutMe>}></Route>
                <Route path="/Resume" element={<Resume></Resume>}></Route>
                <Route path="/Contact" element={<Contact></Contact>}></Route>
              </Route>
            </Routes>
          </Router>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}

export default App;
