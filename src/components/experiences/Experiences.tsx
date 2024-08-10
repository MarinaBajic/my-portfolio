import styles from './Experiences.module.scss';
import Section from '../section/Section';
import experienceGroupsData from './experiencesData.json';
import { useTheme } from '../../context/ThemeProvider';

type TExperience = {
	start: string;
	end: string;
	title?: string;
	company: string;
	companyLink: string;
	description: string;
};

type TExperienceGroup = {
	heading: string;
	experiences: Array<TExperience>;
};

const Experiences = () => {
	const experienceGroups: Array<TExperienceGroup> = experienceGroupsData;

	return (
		<Section
			id="experience"
			background="experience"
			subheading="Professional"
			heading="Experience"
		>
			<div className={styles.experiences}>
				{experienceGroups.map((experienceGroup, index) => (
					<ExperienceGroup
						key={index}
						experienceGroup={experienceGroup}
					/>
				))}
			</div>
		</Section>
	);
};

const ExperienceGroup = ({
	experienceGroup,
}: {
	experienceGroup: TExperienceGroup;
}) => {
	return (
		<div className={styles.card}>
			<div>
				<span className={styles.heading}>
					{experienceGroup.heading}
				</span>
				<div className={styles.decoration}></div>
			</div>
			{experienceGroup.experiences.map((experience, index) => (
				<Experience key={index} experience={experience} />
			))}
		</div>
	);
};

const Experience = ({ experience }: { experience: TExperience }) => {
	const { theme } = useTheme();

	return (
		<div className={styles.experience}>
			<div className={styles.date}>
				{theme == 'designer' ? (
					<>
						<span>{experience.start}</span>
						<span className={styles.end}>{experience.end}</span>
					</>
				) : (
					<span>
						{experience.start} {experience.end}
					</span>
				)}
			</div>
			<div className={styles.content}>
				<span className={styles.title}>
					{experience.title}
					<a href={experience.companyLink} target="_blank">
						{experience.title ? ' at ' : ''}
						{experience.company}
					</a>
				</span>
				<span className={styles.description}>
					{experience.description}
				</span>
			</div>
		</div>
	);
};

export default Experiences;
