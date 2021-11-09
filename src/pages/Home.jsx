import React from "react";
import ContactSidebar from "../components/ContactSidebar";
import { Link } from "react-router-dom";


const Home = () => {
    return (
        <div>
            <ContactSidebar />
            <section>
                <h1>We Super People -</h1>
                <h2>Digitalisierungsinitiative für private Umfragen.</h2>
                <p>Opensource für Privatpersonen zum Gedankenaustausch.</p>
            </section>

            <Link to="/" className="Log_in" >
                LOG IN
            </Link>

            <Link to="/#">
                LOS GEHTS
            </Link>




        </div>
    );
};


export default Home;
