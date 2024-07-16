import Title from '../../components/title/Title';
import styles from './Projects.module.scss';

const Projects = () => {
	return (
		<section id="projects" className={`section`}>
			<Title
				background="Projects"
				subheading="Personal"
				heading="Projects"
			/>
		</section>
	);
};

export default Projects;
