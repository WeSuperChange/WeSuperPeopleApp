// import logo from "./logo.svg";
import "./App.css";
import {
    BrowserRouter as Router, Routes, Route
} from "react-router-dom";
import Home from "./pages/Home";
import { Login } from "./pages/Login";
import { Letsgo } from "./pages/Letsgo";
import { Contact } from "./pages/Contact";
import ContactThanks from "./pages/ContactThanks";
import { NewPoll } from "./pages/NewPoll";
import { OwnPoll } from "./pages/OwnPoll";
import Question from "./pages/Question"
import { PollThanks } from "./pages/PollThanks";
import Results from "./pages/Results";
import { HomePoll } from "./pages/HomePoll";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} exact />
                <Route path="/login" element={<Login />} />
                <Route path="/letsgo" element={<Letsgo />} />
                <Route path="/contact" element={<Contact />} exact />
                <Route path="/contact_thanks" element={<ContactThanks />} />
                <Route path="/home_poll" element={<HomePoll />} />
                <Route path="/new_poll" element={<NewPoll />} />
                <Route path="/own_poll" element={<OwnPoll />} />
                <Route path="/question" element={<Question />} />
                <Route path="/poll_thanks" element={<PollThanks />} />
                <Route path="/Results" element={<Results />} />
            </Routes>
        </Router>
    );
}

export default App;
