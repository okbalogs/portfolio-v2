import { motion } from 'framer-motion';
import './Skills.css';

const skillCategories = [
    {
        title: 'Languages',
        skills: [
            { name: 'Python', icon: 'fab fa-python', level: 75 },
            { name: 'JavaScript (ES6+)', icon: 'fab fa-js-square', level: 80 },
        ],
    },
    {
        title: 'Web Tech',
        skills: [
            { name: 'HTML5', icon: 'fab fa-html5', level: 90 },
            { name: 'CSS3/Sass', icon: 'fab fa-css3-alt', level: 85 },
            { name: 'React.js', icon: 'fab fa-react', level: 80 },
            { name: 'React Native', icon: 'fab fa-react', level: 70 },
            { name: 'Tailwind CSS', icon: 'fab fa-css3', level: 85 },
            { name: 'Flask', icon: 'fab fa-python', level: 65 },
        ],
    },
    {
        title: 'Tools & Others',
        skills: [
            { name: 'Git & GitHub', icon: 'fab fa-git-alt', level: 85 },
            { name: 'Antigravity', icon: 'fas fa-robot', level: 75 },
            { name: 'Linux', icon: 'fab fa-linux', level: 70 },
            { name: 'VS Code', icon: 'fas fa-code', level: 90 },
        ],
    },
];

const Skills = () => {
    return (
        <section id="skills" className="skills-section section">
            <h2 className="section-title">Technical Skills</h2>

            <div className="skills-grid-all">
                {skillCategories.map((cat, i) => (
                    <div key={cat.title} className="skill-group">
                        <h3 className="skill-group-title">{cat.title}</h3>
                        <div className="skill-items">
                            {cat.skills.map((skill, j) => (
                                <motion.div
                                    key={skill.name}
                                    className="skill-item"
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, margin: '-30px' }}
                                    transition={{
                                        duration: 0.4,
                                        delay: i * 0.1 + j * 0.06,
                                        ease: [0.645, 0.045, 0.355, 1],
                                    }}
                                >
                                    <div className="skill-icon">
                                        <i className={skill.icon}></i>
                                    </div>
                                    <span className="skill-name">{skill.name}</span>
                                    <div className="skill-bar">
                                        <motion.div
                                            className="skill-fill"
                                            initial={{ width: 0 }}
                                            whileInView={{ width: `${skill.level}%` }}
                                            viewport={{ once: true, margin: '-20px' }}
                                            transition={{
                                                duration: 1,
                                                delay: i * 0.1 + j * 0.06 + 0.2,
                                                ease: [0.16, 1, 0.3, 1],
                                            }}
                                        />
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
