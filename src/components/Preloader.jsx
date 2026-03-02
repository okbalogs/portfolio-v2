import { useState, useEffect } from 'react';
import './Preloader.css';

const Preloader = () => {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setLoaded(true), 1800);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={`preloader${loaded ? ' loaded' : ''}`}>
            <div className="preloader-inner">
                <span className="preloader-logo">
                    <span className="preloader-bracket">{'<'}</span>
                    BO
                    <span className="preloader-bracket">{'/>'}</span>
                </span>
                <div className="preloader-bar">
                    <div className="preloader-fill"></div>
                </div>
            </div>
        </div>
    );
};

export default Preloader;
