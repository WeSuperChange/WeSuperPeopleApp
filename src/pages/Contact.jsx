import React from 'react'
// import { Link } from "react-router-dom";
import "../assets/css/Contact.css"

export default function Contact() {
    return (
        <section className="contact">
            {/* 
            {/* ============================== Start of left Area ================================= 
            <div className="leftArea">
                <img src="/img/logo_1.png" alt="We Super People Logo" />

                <div className="leftAreaText">
                    <h1>We Super <br /> People</h1>

                    <p>
                        <span>Mitmachen</span> <br />
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.Harum similique corrupti itaque architecto minus laboriosam obcaecati repellat totam quidem nisi dicta sit beatae numquam, voluptas odit odio qui ipsum repudiandae.
                    </p>
                </div>
            </div>

            {/* ============================== Start of right Area =================================
            <div className="rightArea">
                <form action="">
                    <fieldset className="formBox">
                        <label htmlFor="Name"></label>
                        Name <span>*</span> <br /> <input name="name" id="vorname" placeholder="Enter text" />
                        <br />
                        Email <span>*</span> <br /> <input type="email" name="email" id="email" placeholder="Enter text" />
                        <br />
                        Nachricht <span>*</span> <br /> <input type="text" id="message" />
                        <br />
                        <Link to="/contact_thanks" className="#">Senden</Link>
                    </fieldset>
                </form>
            </div>
                        <div className="Sidebar">
            </div>
        </section>



            <section className="contact">
            */}
            {/* contentArea  flex */}
            <div className="contentArea">

                {/* ============================== Start of left Area ================================= */}
                <div className="leftArea">
                    <img
                        src="/img/logo_1.png"
                        alt="We Super People Logo"
                        className="logoContact"
                    />

                    <div className="leftAreaText">
                        <h1>We Super <br /> People</h1>

                        <p>
                            <span className="span_LA">Mitmachen</span> <br />
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.Harum similique corrupti itaque architecto minus laboriosam obcaecati repellat totam quidem nisi dicta sit beatae numquam, voluptas odit odio qui ipsum repudiandae.
                        </p>
                    </div>

                </div>


                {/* ============================== Start of right Area ================================= */}
                <div className="rightArea">

                    {/* display: flex; flex-direction: column; */}
                    <form className="formBox" action="post">
                        <label className="label" htmlFor="name">Name <span className="span_RA">*</span></label>
                        <input name="name" id="vorname" placeholder="Enter text" />

                        <label className="label" htmlFor="email">Email <span className="span_RA">*</span></label>
                        <input type="email" name="email" id="email" placeholder="Enter text" />

                        <label className="label" htmlFor="input">Nachricht <span className="span_RA">*</span></label>
                        <textarea name="message" id="message" cols="30" rows="10" ></textarea>

                        <input type="submit" value="S E N D E N" id="senden" />
                    </form>

                </div>
            </div>

            <div className="Sidebar">
                <p>TEST</p>
            </div>
        </section>
    )
}



