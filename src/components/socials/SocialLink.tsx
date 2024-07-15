import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./SocialLink.module.scss"

type Props = {
	href: string;
	icon: any
};

const SocialLink = ({ href, icon }: Props) => {
	return (
		<a href={href} target="_blank" className={styles.icon}>
			<FontAwesomeIcon icon={icon} />
		</a>
	);
};

export default SocialLink;
