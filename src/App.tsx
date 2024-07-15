import './App.scss';
import Header from './sections/header/Header';
import Navigation from './components/navigation/Navigation';
import NavigationLink from './components/navigation/NavigationLink';
import SocialLink from './components/socials/SocialLink';
import Socials from './components/socials/Socials';
import Logo from './components/logo/Logo';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons"
import Hero from './sections/hero/Hero';

function App() {
	return (
		<>
			<Header
				logo={<Logo />}
				navigation={
					<Navigation>
						<NavigationLink href="#experience">
							Experience
						</NavigationLink>
						<NavigationLink href="#projects">Projects</NavigationLink>
						<NavigationLink href="#about">About</NavigationLink>
						<NavigationLink href="#contact">Contact</NavigationLink>
					</Navigation>
				}
				socials={
					<Socials>
						<SocialLink
							href="https://www.linkedin.com/in/marina-bajic/"
							icon={faLinkedinIn}
						/>
						<SocialLink
							href="https://github.com/MarinaBajic"
							icon={faGithub}
						/>
						<SocialLink
							href="mailto:marinabajic10@gmail.com"
							icon={faEnvelope}
						/>
					</Socials>
				}
			/>
			<main className='main'>
				<Hero />
			</main>
		</>
	);
}

export default App;
