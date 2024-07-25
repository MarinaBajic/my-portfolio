import styles from './Projects.module.scss';
import Button from '../buttons/Button';
import Section from '../section/Section';
import projectsData from './projectsData.json';
import { isLargeScreen } from '../../utils/mediaQueryUtils';
import Title from '../title/Title';

type TProject = {
	subheading: string;
	heading: string;
	stack: string[];
	btns: string[];
};

type CardProps = {
	project: TProject;
	reversed: boolean;
};

const Projects = () => {
	const projects: Array<TProject> = projectsData;

	return (
		<Section
			id="projects"
			background="projects"
			subheading="Personal"
			heading="Projects"
		>
			<div className={styles.projects}>
				{projects.map((project, index) => (
					<ProjectCard
						key={index}
						project={project}
						reversed={isLargeScreen() && index % 2 === 1}
					/>
				))}
			</div>
			<Button href="#" color="primary" text="See more" />
		</Section>
	);
};

const ProjectCard = ({ project, reversed }: CardProps) => {
	return (
		<div className={`${styles.project} ${reversed ? styles.reversed : ''}`}>
			<ProjectContent project={project} />
			<div
				className={`${styles.images} ${
					reversed ? styles.reversed : ''
				}`}
			></div>
		</div>
	);
};

const ProjectContent = ({ project }: { project: TProject }) => {
	return (
		<div className={styles.content}>
			<Title
				subtitle={project.subheading}
				title={project.heading}
				style={styles.title}
			/>
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
					<Button key={index} href="#" text={btn} color="secondary" />
				))}
			</div>
		</div>
	);
};

export default Projects;
