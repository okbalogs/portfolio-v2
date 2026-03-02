import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import theme from '../theme';
import './Navbar.css';

const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
];

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        document.body.style.overflow = menuOpen ? 'hidden' : '';
        return () => { document.body.style.overflow = ''; };
    }, [menuOpen]);

    const closeMenu = () => setMenuOpen(false);

    return (
        <>
            <motion.nav
                className={`navbar${scrolled ? ' scrolled' : ''}`}
                initial={{ y: -80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: [0.645, 0.045, 0.355, 1] }}
            >
                <a href="#home" className="nav-logo" onClick={closeMenu}>
                    <span className="logo-accent">{'<'}</span> BO <span className="logo-accent">{'/>'}</span>
                </a>

                <ul className={`nav-links${menuOpen ? ' open' : ''}`}>
                    {navItems.map((item, i) => (
                        <motion.li
                            key={item.label}
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 * i + 0.3, duration: 0.4 }}
                        >
                            <a href={item.href} onClick={closeMenu}>
                                {item.label}
                            </a>
                        </motion.li>
                    ))}
                    <motion.li
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8, duration: 0.4 }}
                    >
                        <a href="#contact" className="nav-cta" onClick={closeMenu}>
                            Contact Me
                        </a>
                    </motion.li>
                </ul>

                <div
                    className={`hamburger${menuOpen ? ' active' : ''}`}
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    <span className="bar" />
                    <span className="bar" />
                    <span className="bar" />
                </div>
            </motion.nav>

            <div
                className={`mobile-overlay${menuOpen ? ' visible' : ''}`}
                onClick={closeMenu}
            />
        </>
    );
};

export default Navbar;
