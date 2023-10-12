import {Component} from 'react'

import ConfigurationController from './components/ConfigurationController'

import ConfigurationContext from './context/ConfigurationContext'

import Layout from './components/Layout'

import './App.css'

class App extends Component {
<<<<<<< HEAD
  state = {showContent: true, showLeftNavbar: true, showRightNavbar: true}
=======
  state = {showContent: true}
>>>>>>> 7a68e4db2604972dda8031b06225f08c5cfcafd3

  onToggleShowContent = () =>
    this.setState(pre => ({showContent: !pre.showContent}))

  onToggleShowLeftNavbar = () =>
    this.setState(pre => ({showLeftNavbar: !pre.showLeftNavbar}))

  onToggleShowRightNavbar = () =>
    this.setState(pre => ({showRightNavbar: !pre.showRightNavbar}))

  render() {
    const {showContent, showLeftNavbar, showRightNavbar} = this.state

    return (
      <ConfigurationContext.Provider
        value={{
          showContent,
          showRightNavbar,
          showLeftNavbar,
          onToggleShowLeftNavbar: this.onToggleShowLeftNavbar,
          onToggleShowRightNavbar: this.onToggleShowRightNavbar,
          onToggleShowContent: this.onToggleShowContent,
        }}
      >
        return (
        <div>
          <ConfigurationController />
          <Layout />
        </div>
        )
      </ConfigurationContext.Provider>
    )
  }
}

export default App
<<<<<<< HEAD
=======

/* showContent: true,
  showLeftNavbar: true,
  showRightNavbar: true,
  onToggleShowContent: () => {},
  onToggleShowLeftNavbar: () => {},
  onToggleShowRightNavbar: () => {}, */
>>>>>>> 7a68e4db2604972dda8031b06225f08c5cfcafd3
