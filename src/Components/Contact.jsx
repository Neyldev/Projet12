import React, { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const subject = encodeURIComponent("Demande de contact");
        const body = encodeURIComponent(`
            Nom: ${formData.name}
            Email: ${formData.email}
            Message: ${formData.message}
        `);

        const mailtoLink = `mailto:Neil@gmail.com?subject=${subject}&body=${body}`;

        window.location.href = mailtoLink;
    };

    return (
        <div>
            <section id="contact">
                <h2>Contact</h2>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="name">Nom</label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        autoComplete="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                    />

                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        autoComplete="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                    />

                    <label htmlFor="message">Message</label>
                    <textarea
                        name="message"
                        id="message"
                        cols="30"
                        rows="10"
                        required
                        value={formData.message}
                        onChange={handleChange}
                    ></textarea>

                    <input type="submit" value="Envoyer" />
                </form>
            </section>
        </div>
    );
};

export default Contact;