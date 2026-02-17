
import React, { useRef } from "react";
import emailjs from "emailjs-com";
import "./Contact.css";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { SiLeetcode, SiGeeksforgeeks, SiGithub, SiLinkedin } from "react-icons/si";


const Contact = () => {
    const formRef = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                import.meta.env.VITE_EMAIL_SERVICE_ID,
                import.meta.env.VITE_EMAIL_TEMPLATE_ID,
                formRef.current,
                import.meta.env.VITE_EMAIL_PUBLIC_KEY
            )
            .then(() => {
                toast.success("Message sent successfully", {
                    position: "top-right",
                    autoClose: 3000,
                    theme: "dark",
                });
                formRef.current.reset();
            })
            .catch(() => {
                toast.error("Failed to send message", {
                    position: "top-right",
                    autoClose: 3000,
                    theme: "dark",
                });
            });

    };

    return (
        <section className="contact-section" id="contact">
            <h2 className="section-title">Contact Me </h2>
            <p className="section-subtitle">
                Let’s turn ideas into code
            </p>

            <div className="contact-wrapper">

                {/* Contact Info */}
                <div className="contact-info">
                    <div className="contact-item">
                        <FaEnvelope />
                        <span>arpitprajapati466@gmail.com</span>
                    </div>
                    <div className="contact-item">
                        <FaMapMarkerAlt />
                        <span>Delhi,India</span>
                    </div>

                    <div className="contact-links">


                        <a href="https://leetcode.com/u/GetUnknownError/" target="_blank" rel="noreferrer">
                            <SiLeetcode /> LeetCode
                        </a>

                        <a href="https://www.geeksforgeeks.org/profile/getunkn0wnrerror" target="_blank" rel="noreferrer">
                            <SiGeeksforgeeks /> GFG
                        </a>
                    </div>

                </div>

                {/* Contact Form */}
                <form ref={formRef} className="contact-form" onSubmit={sendEmail}>
                    <input
                        type="text"
                        name="user_name"
                        placeholder="Your Name"
                        required
                    />
                    <input
                        type="email"
                        name="user_email"
                        placeholder="Your Email"
                        required
                    />
                    <textarea
                        rows="4"
                        name="message"
                        placeholder="Your Message"
                        required
                    ></textarea>

                    <button type="submit">Send Message</button>
                </form>

            </div>
        </section>
    );
};

export default Contact;
