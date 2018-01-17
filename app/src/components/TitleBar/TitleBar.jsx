/*
  WHY DOES THIS COMPONENT EXIST?
  This component is an invisible, fixed bar on top of the app.
  Since ElectronReactApp hides the default titlebar on top of
  each window, this component's function is to accept drag 
  events and double clicks to simulate the same function.

  BUG: There's currently an Electron bug that causes isMaximized
  to always return false. This component implements a workaround
  found at https://github.com/electron/electron/issues/9092.
*/

import React from 'react'
import styles from './TitleBar.css'

const remote = require('electron').remote
const mainWindow = remote.getGlobal('mainWindow')

export default function TitleBar () {
  
  let maximized = false
  
  function handleDoubleClick() {
    if (maximized) {
      mainWindow.unmaximize()
      maximized = false
    } else {
      mainWindow.maximize()
      maximized = true
    }
  }
  
  return (
    <div
      className={styles.titlebar}
      onDoubleClick={() => handleDoubleClick()}
    />
  )
  
}