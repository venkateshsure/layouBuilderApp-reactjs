// Write your code here

import ConfigurationContext from '../../context/ConfigurationContext'

import './index.css'

const ConfigurationController = () => {
  const clickContent = onToggleShowContent => {
    onToggleShowContent()
  }

  return (
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
                  onClick={onToggleShowContent}
                />
                <p>Content</p>
              </div>
              <div className="checkbox-con">
                <input
                  onClick={onToggleShowLeftNavbar}
                  checked={showLeftNavbar}
                  type="checkbox"
                />
                <p>Left Navbar</p>
              </div>
              <div className="checkbox-con">
                <input
                  onClick={onToggleShowRightNavbar}
                  checked={showRightNavbar}
                  type="checkbox"
                />
                <p>Right Navbar</p>
              </div>
            </div>
          </div>
        )
      }}
    </ConfigurationContext.Consumer>
  )
}

export default ConfigurationController

/* showContent: true,
  showLeftNavbar: true,
  showRightNavbar: true,
  onToggleShowContent: () => {},
  onToggleShowLeftNavbar: () => {},
  onToggleShowRightNavbar: () => {}, */
