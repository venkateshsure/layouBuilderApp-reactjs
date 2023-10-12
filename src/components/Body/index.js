// Write your code here

import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

const Body = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {showContent} = value
      return showContent ? (
        <div className="con">
          <div className="content-head-body">
            <div className="left">
              <h1>Left Bar Item</h1>
              <p>Item1</p>
              <p>Item2</p>
              <p>Item3</p>
              <p>Item4</p>
            </div>
            <div className="content">
              <h1>Content</h1>
              <p>
                Lorem ipsum developer door sit armet. I need to improve myself
                to get better in studies and also i need to bertter in
                communvarojeffjkjhe hcvkdsvjc
              </p>
            </div>
            <div className="right">
              <h1>Right Navbar</h1>
              <div className="right-fir-con">
                <p>Ad1</p>
              </div>
              <div className="right-fir-con">
                <p>Ad2</p>
              </div>
            </div>
          </div>
        </div>
      ) : null
    }}
  </ConfigurationContext.Consumer>
)

export default Body

/* showContent: true,
  showLeftNavbar: true,
  showRightNavbar: true,
  onToggleShowContent: () => {},
  onToggleShowLeftNavbar: () => {},
  onToggleShowRightNavbar: () => {}, */
