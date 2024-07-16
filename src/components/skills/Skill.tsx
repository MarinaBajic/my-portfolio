import styles from './Skill.module.scss';

type Props = {
	skill: string;
	isLast: boolean;
};

const Skill = ({ skill, isLast }: Props) => {
	return (
		<>
			<span className={styles.skill}>{skill}</span>
			{!isLast && <span className={styles.skill}>|</span>}
		</>
	);
};

export default Skill;
