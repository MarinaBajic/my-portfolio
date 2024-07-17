import styles from './Skills.module.scss';
import { isMobile } from '../../utils/mediaQueryUtils';

type SkillProps = {
	skill: string;
	isLast: boolean;
};

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
	if (isMobile()) skills = skillsMobile;

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

const Skill = ({ skill, isLast }: SkillProps) => {
	return (
		<>
			<span className={styles.skill}>{skill}</span>
			{!isLast && <span className={styles.skill}>|</span>}
		</>
	);
};

export default Skills;
