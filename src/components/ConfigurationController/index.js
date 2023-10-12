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
<<<<<<< HEAD
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
=======
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
>>>>>>> 7a68e4db2604972dda8031b06225f08c5cfcafd3
              </div>
            </div>
          </div>
        )
      }}
    </ConfigurationContext.Consumer>
  )
}

export default ConfigurationController
<<<<<<< HEAD
=======

/* showContent: true,
  showLeftNavbar: true,
  showRightNavbar: true,
  onToggleShowContent: () => {},
  onToggleShowLeftNavbar: () => {},
  onToggleShowRightNavbar: () => {}, */
>>>>>>> 7a68e4db2604972dda8031b06225f08c5cfcafd3
