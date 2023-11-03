import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Flat from "./pages/Flat/Flat";
import Error from "./pages/Error/Error";

function App() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/flat/:id" element={<Flat />} />
                <Route path="*" element={<Error />} />
            </Routes>
            <Footer />
            </Router>
    );
}

export default App;
