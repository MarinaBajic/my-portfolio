import styles from "./Socials.module.scss"

type Props = {
	children: any
}

const Socials = ({ children }: Props) => {
  return (
		<div className={styles.socials}>
			{children}
		</div>
  );
}

export default Socials