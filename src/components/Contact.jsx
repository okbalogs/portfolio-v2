import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
    const formRef = useRef(null);
    const [btnState, setBtnState] = useState({ text: 'Send Message', cls: '' });

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = formRef.current;
        const formData = new FormData(form);
        formData.append('access_key', import.meta.env.VITE_WEB3FORMS_ACCESS_KEY);

        setBtnState({ text: 'Sending...', cls: '' });

        try {
            const res = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                body: formData,
            });

            const data = await res.json();

            if (data.success) {
                setBtnState({ text: 'Sent!', cls: 'contact-form__btn--success' });
                form.reset();
            } else {
                throw new Error();
            }
        } catch {
            setBtnState({ text: 'Error!', cls: 'contact-form__btn--error' });
        }

        setTimeout(() => setBtnState({ text: 'Send Message', cls: '' }), 3000);
    };

    return (
        <section id="contact" className="contact-section section">
            <h2 className="section-title">Get In Touch</h2>

            <motion.div
                className="contact-container"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, ease: [0.645, 0.045, 0.355, 1] }}
            >
                <div className="contact-info">
                    <h3>Let&apos;s build something amazing together.</h3>
                    <p>
                        I&apos;m currently looking for internships and opportunities. Whether you have a
                        question or just want to say hi, I&apos;ll try my best to get back to you!
                    </p>
                    <div className="contact-details">
                        <div className="contact-detail">
                            <FaEnvelope />
                            <span>okbalogs@gmail.com</span>
                        </div>
                        <div className="contact-detail">
                            <FaMapMarkerAlt />
                            <span>Lagos, Nigeria</span>
                        </div>
                    </div>
                </div>

                <form
                    ref={formRef}
                    className="contact-form"
                    onSubmit={handleSubmit}
                >
                    <input type="text" name="name" placeholder="Name" required />
                    <input type="email" name="email" placeholder="Email" required />
                    <textarea name="message" placeholder="Message" rows="5" required />
                    <button
                        type="submit"
                        className={`contact-form__btn ${btnState.cls}`}
                        disabled={btnState.text === 'Sending...'}
                    >
                        {btnState.text}
                    </button>
                </form>
            </motion.div>
        </section>
    );
};

export default Contact;
