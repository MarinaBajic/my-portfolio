import styles from "./Navigation.module.scss"

type Props = {
	children: any
}

const Navigation = ({ children }: Props) => {
  return (
		<nav className={styles.nav}>
			<ul className={styles["nav__list"]}>
				{children}
			</ul>
		</nav>
  );
}

export default Navigation