import styles from './Experience.module.scss';
import Section from '../section/Section';

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

const experienceGroups: Array<TExperienceGroup> = [
	{
		heading: 'Education',
		experiences: [
			{
				start: '2020 -',
				end: '2024',
				title: 'University of Novi Sad, Faculty of Sciences',
				description: "Bachelor's degree in Information Technologies",
			},
		],
	},
	{
		heading: 'Internships',
		experiences: [
			{
				start: 'May - Jun',
				end: '2024',
				title: 'Synechron | Web Developer',
				description: 'Microservices | Spring Boot | React',
			},
			{
				start: 'Sep',
				end: '2023',
				title: 'Vega IT | Web UI Developer',
				description: 'HTML5 | Sass | JavaScript | Gsap',
			},
		],
	},
	{
		heading: 'Organizations',
		experiences: [
			{
				start: 'Mar -',
				end: '2024',
				title: 'BarKod | UI/UX Designer & Web Developer',
				description: 'Figma | Astro | Tailwind',
			},
			{
				start: '2022 -',
				end: '2023',
				title: 'BEST | IT Coordinator & Front-end Developer',
				description: 'Figma | JavaScript | CSS | Notion',
			},
		],
	},
];

const Experiences = () => {
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
