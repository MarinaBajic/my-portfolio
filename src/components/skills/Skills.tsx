import styles from './Skills.module.scss';
import { isMobile } from '../../utils/mediaQueryUtils';
import skillsData from './skillsData.json';

type SkillProps = {
	skill: string;
	isLast: boolean;
};

const Skills = () => {
	const skills = isMobile() ? skillsData.mobile : skillsData.desktop;

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
