import useMediaQuery from '@mui/material/useMediaQuery';
import Skill from '../../components/skill/Skill';
import styles from './Skills.module.scss';

type Props = {
	skills: string[][];
	skillsMobile: string[][];
};

const Skills = ({ skills, skillsMobile }: Props) => {
	const isMobile = useMediaQuery('(max-width:833px)');

	if (isMobile) skills = skillsMobile;

	return (
		<section className={styles.skills}>
			{skills.map((skillGroup) => (
				<div className={styles.group}>
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
