import Section from '../section/Section';
import styles from './Experience.module.scss';

type TExperience = {
	start: string;
	end: string;
	title: string;
	description: string;
};

type ExperienceGroup = {
	heading: string;
	experiences: Array<TExperience>;
};

const experienceGroups: Array<ExperienceGroup> = [
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

const Experience = () => {
	return (
		<Section
			id="experience"
			background="Experience"
			subheading="Professional"
			heading="Experience"
		>
			{experienceGroups.map((experienceGroup) => (
				<div>
					<span>{experienceGroup.heading}</span>
					{experienceGroup.experiences.map((experience) => (
						<div>
							<div>
								<span>{experience.start}</span>
								<span>{experience.end}</span>
							</div>
							<div>
								<span>{experience.title}</span>
								<span>{experience.description}</span>
							</div>
						</div>
					))}
				</div>
			))}
		</Section>
	);
};

export default Experience;
