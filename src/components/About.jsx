import { motion } from 'framer-motion';
import { FaUserAstronaut } from 'react-icons/fa';
import './About.css';

const About = () => {
    return (
        <section id="about" className="about-section section">
            <h2 className="section-title">About Me</h2>

            <div className="about-container">
                <motion.div
                    className="about-image"
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{ duration: 0.6, ease: [0.645, 0.045, 0.355, 1] }}
                >
                    <div className="about-image__frame">
                        <FaUserAstronaut />
                    </div>
                </motion.div>

                <motion.div
                    className="about-text"
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{ duration: 0.6, delay: 0.15, ease: [0.645, 0.045, 0.355, 1] }}
                >
                    <h3>I create digital experiences.</h3>
                    <p>
                        I am a Computer Science student currently pursuing my degree. My journey started with a
                        simple &apos;Hello World&apos; and has evolved into a deep passion for algorithms, web
                        development, and AI.
                    </p>
                    <p>
                        When I&apos;m not coding, I&apos;m exploring new tech, contributing to open source, or
                        gaming. I believe in continuous learning and pushing the boundaries of what&apos;s
                        possible on the web.
                    </p>

                    <div className="about-stats">
                        <div className="about-stat">
                            <span className="about-stat__number">2</span>
                            <span className="about-stat__label">Projects</span>
                        </div>
                        <div className="about-stat">
                            <span className="about-stat__number">1+</span>
                            <span className="about-stat__label">Years Coding</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
