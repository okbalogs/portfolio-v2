import ExperienceItem from './ExperienceItem';

const experienceData = [
    {
        date: 'Feb 2026 - Till date',
        role: 'Frontend Engineer Intern',
        company: 'TrueMinds Innovations Ltd',
        description: '',
        tech: ['React', 'JavaScript', 'CSS'],
    },
];

const Experience = () => {
    return (
        <section id="experience" className="section">
            <h2 className="section-title">Experience</h2>
            <div className="timeline">
                {experienceData.map((exp, i) => (
                    <ExperienceItem key={i} {...exp} />
                ))}
            </div>
        </section>
    );
};

export default Experience;
