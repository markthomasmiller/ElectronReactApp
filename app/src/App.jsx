import React from 'react'
import './assets/styles/global.css'
import Link from './components/Link/Link.jsx'
import TitleBar from './components/TitleBar/TitleBar.jsx'

const App = () => (
	<div>
		<TitleBar />
		<div className="centered">
			<p>It lives.</p>
			<Link to="https://github.com/zvphy/ElectronReactApp">Documentation</Link>
		</div>
	</div>
)

export default App
