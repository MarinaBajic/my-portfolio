import styles from './Projects.module.scss';
import Button from '../buttons/Button';
import Section from '../section/Section';
import projectsData from './projectsData.json';
import { isLargeScreen } from '../../utils/mediaQueryUtils';
import Title from '../title/Title';
import { useEffect, useState } from 'react';
import image from '../../assets/barKod.png';

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
			<Button href="#" hierarchy="secondary" text="See more" />
		</Section>
	);
};

const ProjectCard = ({ project, reversed }: CardProps) => {
	const [position, setPosition] = useState({ x: 0, y: 0 });
	const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

	useEffect(() => {
		const handleMouseMove = (e: MouseEvent) => {
			setMousePosition({ x: e.clientX, y: e.clientY });
		};

		window.addEventListener('mousemove', handleMouseMove);

		const interval = setInterval(() => {
			setPosition((prevPosition) => ({
				x: prevPosition.x + (mousePosition.x - prevPosition.x) * 0.1,
				y: prevPosition.y + (mousePosition.y - prevPosition.y) * 0.1,
			}));
		}, 10);

		return () => {
			window.removeEventListener('mousemove', handleMouseMove);
			clearInterval(interval);
		};
	}, [mousePosition]);

	return (
		<div className={`${styles.project} ${reversed ? styles.reversed : ''}`}>
			<ProjectContent project={project} />
			<div
				className={`${styles.screen} ${
					reversed ? styles.reversed : ''
				}`}
			>
				<div className={styles.image} />
				<div className={styles.overlay} />
			</div>
			<span
				className={styles.cursor}
				style={{
					top: position.y - 12,
					left: position.x - 12,
				}}
			>
				View
				<br />
				Project
			</span>
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
					<Button
						key={index}
						href="#"
						text={btn}
						hierarchy="primary"
					/>
				))}
			</div>
		</div>
	);
};

export default Projects;
