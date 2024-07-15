import logo from '../../assets/logo.svg';
import styles from "./Logo.module.scss"

const Logo = () => {
	return (
		<a href="#hero" title="Marina Bajic">
			<img
				className={styles.logo}
				src={logo}
				alt="Marina Bajic Logo"
				loading="eager"
			/>
		</a>
	);
};

export default Logo;
