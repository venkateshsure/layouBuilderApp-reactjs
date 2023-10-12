// Write your code here

import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

const Body = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {showContent, showRightNavbar, showLeftNavbar} = value
      return (
        <div className="con">
          <div className="content-head-body">
            <div className="left">
              {showLeftNavbar && (
                <>
                  <h1>Left Navbar Menu</h1>
                  <ul className="ul">
                    <li>Item1</li>
                    <li>Item2</li>
                    <li>Item3</li>
                    <li>Item4</li>
                  </ul>
                </>
              )}
            </div>
            <div className="content">
              {showContent && (
                <>
                  <h1>Content</h1>
                  <p>
                    Lorem ipsum developer door sit armet. I need to improve
                    myself to get better in studies and also i need to bertter
                    in communvarojeffjkjhe hcvkdsvjc
                  </p>
                </>
              )}
            </div>
            <div className="right">
              {showRightNavbar && (
                <>
                  <h1>Right Navbar</h1>
                  <div className="right-fir-con">
                    <p>Ad 1</p>
                  </div>
                  <div className="right-fir-con">
                    <p>Ad 2</p>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default Body
