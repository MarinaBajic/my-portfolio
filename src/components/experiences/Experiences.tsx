import styles from './Experiences.module.scss';
import Section from '../section/Section';
import experienceGroupsData from './experiencesData.json';

type TExperience = {
	start: string;
	end: string;
	title: string;
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
			background="Experience"
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
		<div>
			<span className="title title--primary">
				{experienceGroup.heading}
			</span>
			{experienceGroup.experiences.map((experience, index) => (
				<Experience key={index} experience={experience} />
			))}
		</div>
	);
};

const Experience = ({ experience }: { experience: TExperience }) => {
	return (
		<div className={styles.experience}>
			<div className={styles.date}>
				<span>{experience.start}</span>
				<span className={styles.end}>{experience.end}</span>
			</div>
			<div className={styles.content}>
				<span className="title title--tertiary">
					{experience.title}
				</span>
				<span className={styles.description}>
					{experience.description}
				</span>
			</div>
		</div>
	);
};

export default Experiences;
