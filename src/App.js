import Navbar from './Components/navbar/Navbar.js'
import Contacts from './Components/contacts/Contacts'
import Intro from './Components/intro/Intro'
import Portfolio from './Components/portfolio/Portfolio'
import Testimonials from './Components/testimonials/Testimonials'
import Work from './Components/work/Work'
import './App.scss'
import { useState } from 'react'
import Menu from './Components/menu/Menu'

function App() {
	const [menuOpen, setMenuOpen] = useState(false)
	return (
		<div className='App'>
			<Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
			<Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
			<div className='sections'>
				<Intro />
				<Portfolio />
				<Work />

				<Testimonials />
				<Contacts />
			</div>
		</div>
	)
}

export default App
