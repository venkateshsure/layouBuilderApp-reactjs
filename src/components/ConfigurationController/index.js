// Write your code here

import ConfigurationContext from '../../context/ConfigurationContext'

import './index.css'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        showContent,
        showLeftNavbar,
        showRightNavbar,
        onToggleShowContent,
        onToggleShowRightNavbar,
        onToggleShowLeftNavbar,
      } = value
      return (
        <div className="config-con">
          <div className="fir-config-con">
            <h1 className="h1">Layout</h1>
            <div className="checkbox-con">
              <input
                type="checkbox"
                checked={showContent}
                onChange={onToggleShowContent}
                id="content"
              />
              <label htmlFor="content">Content</label>
            </div>
            <div className="checkbox-con">
              <input
                onChange={onToggleShowLeftNavbar}
                checked={showLeftNavbar}
                type="checkbox"
                id="left navbar"
              />
              <label htmlFor="left navbar">Left Navbar</label>
            </div>
            <div className="checkbox-con">
              <input
                onChange={onToggleShowRightNavbar}
                checked={showRightNavbar}
                type="checkbox"
                id="right navbar"
              />
              <label htmlFor="right navbar">Right Navbar</label>
            </div>
          </div>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default ConfigurationController
