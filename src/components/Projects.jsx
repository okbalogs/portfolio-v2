import ProjectCard from './ProjectCard';
//import dula from '../assets/images/dula.png';
import home from '../assets/images/home.png';
import vault from '../assets/images/vault.png';

const projectsData = [
    {
        title: 'Dula Lerona - Frozen Store',
        description:
            'Coming Soon.',
        //tags: ['React', 'CSS3'],
        //image: dula,
        badge: 'Coming Soon',
        bgGradient: 'linear-gradient(135deg, #1e1e2f 0%, #4facfe 100%)',
        demoUrl: '#',
    },
    {
        title: 'Chuks Kitchen',
        description: 'A frontend web application for a Nigerian food ordering service, built as a Figma design-to-code implementation.',
        tags: ['React', 'CSS3'],
        image: home,
        demoUrl: 'https://chuks-kitchen.vercel.app',
    },
    {
        title: 'Vault Manager',
        description:
            'Full-stack file manager with real-time storage analytics, drag-and-drop uploads, and intelligent file categorization.',
        tags: ['Flask', 'Python', 'JavaScript'],
        image: vault,
        bgGradient: 'linear-gradient(135deg, #1e1e2f 0%, #4facfe 100%)',
        demoUrl: 'https://vault-9xvg.onrender.com/',
    },
];

const Projects = () => {
    return (
        <section id="projects" className="section">
            <h2 className="section-title">Featured Projects</h2>
            <div className="projects-grid">
                {projectsData.map((project) => (
                    <ProjectCard key={project.title} {...project} />
                ))}
            </div>
        </section>
    );
};

export default Projects;
