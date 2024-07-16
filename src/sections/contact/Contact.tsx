import Title from '../../components/title/Title';
import styles from './Contact.module.scss';

const Contact = () => {
	return (
		<section id="contact" className={`section`}>
			<span className="background">Contact</span>
			<Title subheading="Contact me" heading="How can I help?" />
		</section>
	);
};

export default Contact;
