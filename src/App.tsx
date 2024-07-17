import './App.scss';
import Header from './components/header/Header';
import Hero from './components/hero/Hero';
import Skills from './components/skills/Skills';
import Experience from './components/experience/Experience';
import Projects from './components/projects/Projects';
import About from './components/about/About';
import Contact from './components/contact/Contact';

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
