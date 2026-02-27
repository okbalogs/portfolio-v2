import { motion } from 'framer-motion';
import './Skills.css';

const skillCategories = [
    {
        title: 'Languages',
        skills: ['Python', 'JavaScript (ES6+)'],
    },
    {
        title: 'Web Tech',
        skills: ['HTML5', 'CSS3/Sass', 'React.js', 'React Native', 'Tailwind CSS'],
    },
    {
        title: 'Tools & Others',
        skills: ['Git & GitHub', 'Antigravity', 'Linux', 'VS Code'],
    },
];

const Skills = () => {
    return (
        <section id="skills" className="skills-section section">
            <h2 className="section-title">Technical Skills</h2>

            <div className="skills-container">
                {skillCategories.map((cat, i) => (
                    <motion.div
                        key={cat.title}
                        className="skill-category"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-50px' }}
                        transition={{
                            duration: 0.5,
                            delay: i * 0.1,
                            ease: [0.645, 0.045, 0.355, 1],
                        }}
                    >
                        <h3 className="skill-category__title">{cat.title}</h3>
                        <div className="skill-tags">
                            {cat.skills.map((skill) => (
                                <span key={skill} className="skill-tag">{skill}</span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
