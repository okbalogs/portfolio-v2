import { FaHeart } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="site-footer">
            <p>
                &copy; 2026 Balogun Oyinkansola. Built with{' '}
                <FaHeart className="footer-heart" /> and Code.
            </p>
        </footer>
    );
};

export default Footer;
