import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import styles from "./App.scss";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Error from "./pages/Error/Error";
import Accommodations from "./pages/Accommodations/Accommodations";

function App() {
    return (
        <div className={`d-flex flex-column ${styles.appContainer}`}>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route
                        path="/accommodations/:id"
                        element={<Accommodations />}
                    />
                    <Route path="*" element={<Error />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </div>
    );
}

export default App;
