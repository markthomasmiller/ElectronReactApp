import React from 'react'
import { shell } from 'electron'
import styles from './Link.css'

export default class Link extends React.Component {
	link(url) {
		shell.openExternal(url)
	}

	render() {
		return (
			<a
				href="#"
				className={styles.component}
				onClick={() => {
					this.link(this.props.to)
				}}
			>
				{this.props.children}
			</a>
		)
	}
}
