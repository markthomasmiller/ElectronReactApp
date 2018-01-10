import React from 'react'
import './assets/styles/global.css'
import Link from './components/Link/Link.jsx'

const App = () => (
	<div className="centered">
		<p>It lives.</p>
		<Link to="https://github.com/zvphy/ElectronReactApp">Documentation</Link>
	</div>
)

export default App
