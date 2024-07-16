import useMediaQuery from '@mui/material/useMediaQuery';
import Skill from './Skill';
import styles from './Skills.module.scss';
import Section from '../section/Section';

let skills = [
	['Sass', 'Tailwind', 'React', 'Angular', 'Astro'],
	['Spring Boot', 'Microservices', 'PHP', 'Android Java'],
	['Figma', 'GitHub', 'Docker', 'MySQL'],
];

const skillsMobile = [
	['Sass', 'Tailwind'],
	['React', 'Angular', 'Astro'],
	['Spring Boot', 'Microservices'],
	['PHP', 'Android Java', 'Figma'],
	['GitHub', 'Docker', 'MySQL'],
];

const Skills = () => {
	const isMobile = useMediaQuery('(max-width: 833px)');

	if (isMobile) skills = skillsMobile;

	return (
		<section id="skills" className={styles.skills}>
			<span className="background">Skills</span>
			{skills.map((skillGroup, index) => (
				<div className={styles.group} key={index}>
					{skillGroup.map((skill, index) => (
						<Skill
							key={skill}
							skill={skill}
							isLast={index === skillGroup.length - 1}
						/>
					))}
				</div>
			))}
		</section>
	);
};

export default Skills;
