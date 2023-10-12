import {Component} from 'react'

import ConfigurationController from './components/ConfigurationController'

import ConfigurationContext from './context/ConfigurationContext'

import Layout from './components/Layout'

import './App.css'

class App extends Component {
  state = {showContent: true, showLeftNavbar: true, showRightNavbar: true}

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
