import './App.scss';
import Header from './components/header/Header';
import Hero from './sections/hero/Hero';
import Skills from './components/skills/Skills';
import Experience from './components/experience/Experience';
import Projects from './sections/projects/Projects';
import About from './sections/about/About';
import Contact from './sections/contact/Contact';

function App() {
	return (
		<>
			<Header />
			<main className="main">
				<Hero />
				<Skills />
				<Experience />
				<Projects />
				<About />
				<Contact />
			</main>
		</>
	);
}

export default App;
