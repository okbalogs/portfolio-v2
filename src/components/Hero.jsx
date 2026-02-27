import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import TextType from './Text/TextType';
import './Hero.css';

const Hero = () => {
    return (
        <header id="home" className="hero">
            <motion.div
                className="hero-content"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: [0.645, 0.045, 0.355, 1] }}
            >
                <p className="hero__subtitle">Hello, I'm</p>

                <h1 className="hero__title">
                    Balogun <span className="highlight">Oyinkansola</span>
                </h1>

                <h2 className="hero__role">
                    Computer Science Student &amp;&nbsp;
                    <TextType
                        text={['Dreamer', 'Developer', 'Creator', 'Problem Solver']}
                        typingSpeed={140}
                        deletingSpeed={10}
                        pauseDuration={2000}
                        showCursor
                        cursorCharacter="_"
                        cursorBlinkDuration={0.5}
                    />
                </h2>

                <p className="hero__description">
                    Passionate about building scalable software, solving complex algorithms,
                    and creating intuitive user experiences. Turning caffeine into code since 2024.
                </p>

                <div className="hero__buttons">
                    <a href="#projects" className="hero__btn-primary">View My Work</a>
                    <a href="#contact" className="hero__btn-secondary">Let's Talk</a>
                </div>

                <div className="hero__socials">
                    <a href="https://github.com/okbalogs" target="_blank" rel="noopener noreferrer">
                        <FaGithub />
                    </a>
                    <a href="https://linkedin.com/in/balogunoyinkansola" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin />
                    </a>
                    <a href="https://x.com/" target="_blank" rel="noopener noreferrer">
                        <FaTwitter />
                    </a>
                </div>
            </motion.div>

            <motion.div
                className="hero-visual"
                initial={{ opacity: 0, x: 60 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3, ease: [0.645, 0.045, 0.355, 1] }}
            >
                <div className="code-block-visual">
                    <span className="code-keyword">def</span> <span className="code-class">fibonacci(n)</span>:{'\n'}
                    {'  '}<span className="code-func">a, b</span> = <span className="code-self">0, 1</span>:{'\n'}
                    {'      '}<span className="code-self">for</span> _ <span className="code-string">in range(n):</span>{'\n'}
                    {'          '}<span className="code-self">print</span>(<span className="code-list">a, end=' </span>){'\n'}
                    {'          '}<span className="code-keyword">a, b</span> = <span className="code-func">b, a + b</span>:{'\n'}
                    {'  '}<span className="code-return">fibonacci</span>(<span className="code-string">10</span>)
                </div>
            </motion.div>
        </header>
    );
};

export default Hero;