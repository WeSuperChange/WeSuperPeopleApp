// import logo from "./logo.svg";
import "./App.css";
import {
    BrowserRouter as Router, Routes, Route
} from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Letsgo from "./pages/Letsgo";
import Contact from "./pages/Contact";
import ContactThanks from "./pages/ContactThanks";
import NewPoll from "./pages/NewPoll";
import OwnPoll from "./pages/OwnPoll";
import Question from "./pages/Question"
import PollThanks from "./pages/PollThanks";
import Results from "./pages/Results";
import HomePoll from "./pages/HomePoll";
import ErrorPage from "./pages/Error";
import SignIn from "./pages/Signin";
import { useAuthContext } from "./hooks/useAuthContext";

function App() {
    const { user, appReady } = useAuthContext()

    return (
        //Routing - ToDo: Handle auth users
        < Router >
            {appReady && (
                <Routes>
                    <Route path="/" element={<Home />} exact />
                    <Route path="/login" element={<Login />} exact />
                    <Route path="/signin" element={<SignIn />} exact />
                    <Route path="/letsgo" element={<Letsgo />} exact />
                    <Route path="/contact" element={<Contact />} exact />
                    <Route path="/contact_thanks" element={<ContactThanks />} exact />
                    <Route path="/home_poll" element={<HomePoll />} exact />
                    {user && (<Route path="/new_poll" element={<NewPoll />} />)}
                    {user && (<Route path="/own_poll" element={<OwnPoll />} />)}
                    <Route path="/question" element={<Question />} exact />
                    <Route path="/poll_thanks" element={<PollThanks exact />} />
                    <Route path="/Results" element={<Results />} exact />
                    <Route path="*" element={<ErrorPage />} />
                </Routes>
            )}
        </Router >
    );
}

export default App;