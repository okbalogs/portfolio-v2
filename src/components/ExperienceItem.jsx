import { motion } from 'framer-motion';
import './ExperienceItem.css';

const ExperienceItem = ({
    date,
    role,
    company,
    description,
    tech = [],
}) => {
    return (
        <motion.div
            className="experience-item"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, ease: [0.645, 0.045, 0.355, 1] }}
        >
            <div className="experience-item__dot" />
            <div className="experience-item__line" />

            <div className="experience-item__card">
                <span className="experience-item__date">{date}</span>
                <h3 className="experience-item__role">{role}</h3>
                <span className="experience-item__company">{company}</span>

                {description && (
                    <p className="experience-item__description">{description}</p>
                )}

                {tech.length > 0 && (
                    <div className="experience-item__tech">
                        {tech.map((item) => (
                            <span key={item} className="experience-item__tech-tag">{item}</span>
                        ))}
                    </div>
                )}
            </div>
        </motion.div>
    );
};

export default ExperienceItem;
