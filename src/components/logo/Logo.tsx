import styles from './Logo.module.scss';
import logo from '../../assets/logo.svg';

const Logo = () => {
	return (
		<a href="#hero" title="Marina Bajic" className={styles.logo}>
			<img src={logo} alt="Marina Bajic Logo" loading="eager" />
		</a>
	);
};

export default Logo;
