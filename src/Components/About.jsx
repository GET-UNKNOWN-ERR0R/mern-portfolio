import "./About.css";
import { useEffect, useState } from "react";
import axios from "axios";

const About = () => {

    const [settings, setSettings] = useState({});

    useEffect(() => {
        axios.get(`${import.meta.env.VITE_API_URL}/api/settings`)
            .then(res => setSettings(res.data));
    }, []);

    return (
        <section className="about-section" id="about">
            {/* <div> */}
            <div className="container">
                <div className="about-container">

                    <div className="about-left">
                        <h2 className="about-title">
                            Passionate <span>MERN Stack Developer</span>
                        </h2>

                        <p className="about-text">
                            {settings?.aboutLine1}
                        </p>

                        <p className="about-text">
                            {settings?.aboutLine2}
                        </p>

                        <div className="about-stats">
                            <div>
                                <h3>5+</h3>
                                <span>Projects Built</span>
                            </div>
                            <div>
                                <h3>300+</h3>
                                <span>DSA Problems Solved </span>
                            </div>
                        </div>

                        <a href={settings?.resumeLink}
                            className="resume-btn"
                            target="_blank">
                            View Resume
                        </a>
                    </div>

                    <div className="about-right">
                        <div className="image-ring">
                            <img
                                src={settings?.profileImage}
                                alt=" "
                            />
                        </div>
                    </div>

                </div>
            </div >
        </section >
    );
};

export default About;
