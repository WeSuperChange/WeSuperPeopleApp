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
            {/* {appReady && ( */}
            <Routes>
                {/* Home Sweet Home */}
                <Route path="/" element={<Home />} exact />

                {/* everything to login or create a new account */}
                <Route path="/login" element={<Login />} exact />
                <Route path="/signin" element={<SignIn />} exact />

                {/* stay in touch with us */}
                <Route path="/contact" element={<Contact />} exact />
                <Route path="/contact_thanks" element={<ContactThanks />} exact />

                {/* public area: questions and  answers */}
                <Route path="/letsgo" element={<Letsgo />} exact />
                <Route path="/home_poll" element={<HomePoll />} exact />
                <Route path="/question" element={<Question />} exact />
                <Route path="/poll_thanks" element={<PollThanks exact />} />
                <Route path="/Results" element={<Results />} exact />

                {/* for the lucky people having an account: create a new poll */}
                {user && <Route path="/new_poll" element={<NewPoll />} exact />}
                {user && <Route path="/own_poll" element={<OwnPoll />} exact />}

                {/* {appReady &&<Route path="/logout" element={<Logout />} exact /> } */}

                <Route path="*" element={<ErrorPage />} />

            </Routes>
            {/* )} */}
        </Router >
    );
}

export default App;