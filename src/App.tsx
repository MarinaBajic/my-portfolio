import './App.scss';
import Header from './components/header/Header';
import Hero from './components/hero/Hero';
import Skills from './components/skills/Skills';
import Experiences from './components/experiences/Experiences';
import Projects from './components/projects/Projects';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Blob from './components/blob/Blob';
import { isLargeScreen } from './utils/mediaQueryUtils';

function App() {
	return (
		<>
			<Header />
			<main className="main">
				<Hero />
				<Skills />
				<Experiences />
				<Projects />
				<About />
				<Contact />
			</main>
			<Footer />
			{isLargeScreen() && <Blob />}
		</>
	);
}

export default App;
