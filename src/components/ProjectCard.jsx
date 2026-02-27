import { motion } from 'framer-motion';
import { FiExternalLink, FiGithub, FiFolder } from 'react-icons/fi';
import './ProjectCard.css';

const ProjectCard = ({
    title,
    description,
    tags = [],
    image,
    bgGradient,
    demoUrl,
    repoUrl,
    badge,
}) => {
    return (
        <motion.div
            className="project-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, ease: [0.645, 0.045, 0.355, 1] }}
        >
            <div
                className="project-card__image"
                style={bgGradient ? { background: bgGradient } : { background: '#1e1e1e' }}
            >
                {image ? (
                    <img src={image} alt={title} loading="lazy" />
                ) : (
                    <div className="project-card__placeholder">
                        <FiFolder />
                    </div>
                )}
                {badge && <span className="project-card__badge">{badge}</span>}
            </div>

            <div className="project-card__content">
                <h3 className="project-card__title">{title}</h3>
                <p className="project-card__description">{description}</p>

                {tags.length > 0 && (
                    <div className="project-card__tags">
                        {tags.map((tag) => (
                            <span key={tag} className="project-card__tag">{tag}</span>
                        ))}
                    </div>
                )}

                {(demoUrl || repoUrl) && (
                    <div className="project-card__links">
                        {demoUrl && (
                            <a
                                href={demoUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="project-card__link"
                            >
                                <FiExternalLink /> View Demo
                            </a>
                        )}
                        {repoUrl && (
                            <a
                                href={repoUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="project-card__link"
                            >
                                <FiGithub /> Source
                            </a>
                        )}
                    </div>
                )}
            </div>
        </motion.div>
    );
};

export default ProjectCard;
