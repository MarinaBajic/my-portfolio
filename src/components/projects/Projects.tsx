import Button from '../buttons/Button';
import Section from '../section/Section';
import styles from './Projects.module.scss';

type Project = {
	subheading: string;
	heading: string;
	stack: string[];
	btns: string[];
};

const projects: Array<Project> = [
	{
		subheading: 'UI/UX Design & Development',
		heading: 'BarKod Website',
		stack: ['Figma', 'Astro.js', 'Tailwind.css'],
		btns: ['Figma', 'Live Site'],
	},
	{
		subheading: 'Front-end Development',
		heading: 'Regal Equine Oasis',
		stack: ['Sass', 'Angular', 'TypeScript'],
		btns: ['GitHub'],
	},
	{
		subheading: 'Back-end Development',
		heading: 'Regal Equine Oasis',
		stack: ['Spring Boot', 'MySQL', 'Docker'],
		btns: ['GitHub'],
	},
];

const Projects = () => {
	return (
		<Section
			id="projects"
			background="Projects"
			subheading="Personal"
			heading="Projects"
		>
			<div className={styles.projects}>
				{projects.map((project, index) => (
					<ProjectCard
						key={index}
						project={project}
						reversed={index % 2 === 1}
					/>
				))}
			</div>
		</Section>
	);
};

type CardProps = {
	project: Project;
	reversed: boolean;
};

const ProjectCard = ({ project, reversed = false }: CardProps) => {
	return (
		<div className={`${styles.project} ${reversed ? styles.reversed : ''}`}>
			<div className={styles.content}>
				<div className={styles.title}>
					<span className="title title--quarternary">
						{project.subheading}
					</span>
					<span className="title title--primary">
						{project.heading}
					</span>
				</div>
				<div className={styles.stack}>
					{project.stack.map((tech, index) => (
						<span
							key={index}
							className={styles.tech}
						>{`[ ${tech} ]`}</span>
					))}
				</div>
				<div className={styles.btns}>
					{project.btns.map((btn, index) => (
						<Button key={index} href="#">
							{btn}
						</Button>
					))}
				</div>
			</div>
			<div
				className={`${styles.images} ${
					reversed ? styles.reversed : ''
				}`}
			></div>
		</div>
	);
};

export default Projects;
