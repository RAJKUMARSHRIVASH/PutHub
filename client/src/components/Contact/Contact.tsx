import React, { useState } from "react";
import styles from "./Contact.module.css";

const ContactUs = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Name: " + name);
        console.log("Email: " + email);
        console.log("Message: " + message);
    };

    return (
        <div className={styles.container}>
            <div className={styles.contactUs}>
                <h2>Contact Us</h2>
                <form onSubmit={handleSubmit} className={styles.form} >
                    <input
                        type="text"
                        placeholder="Your name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className={styles.input}
                    />
                    <input
                        type="email"
                        placeholder="Your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className={styles.input}
                    />
                    <textarea
                        placeholder="Your message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className={styles.input}
                    />
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default ContactUs;
