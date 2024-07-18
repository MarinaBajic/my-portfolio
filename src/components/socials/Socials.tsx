import styles from './Socials.module.scss';
import {
	IconDefinition,
	faLinkedinIn,
	faGithub,
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type Social = {
	href: string;
	icon: IconDefinition;
};

const socials: Array<Social> = [
	{ href: 'https://www.linkedin.com/in/marina-bajic/', icon: faLinkedinIn },
	{ href: 'https://github.com/MarinaBajic', icon: faGithub },
	{ href: 'mailto:marinabajic10@gmail.com', icon: faEnvelope },
];

const Socials = () => {
	return (
		<div className={styles.socials}>
			{socials.map((social, index) => (
				<a
					key={index}
					href={social.href}
					target="_blank"
					className={styles.icon}
				>
					<FontAwesomeIcon icon={social.icon} />
				</a>
			))}
		</div>
	);
};

export default Socials;
