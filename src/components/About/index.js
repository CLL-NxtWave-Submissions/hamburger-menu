import Header from '../Header'

import './index.css'

const About = () => {
  const getWindowInnerWidth = () => window.innerWidth
  const currentWindowInnerWidth = getWindowInnerWidth()

  return (
    <div className="about-container">
      <Header />
      <div className="about-content-container">
        <img
          className="about-content-img"
          src={
            currentWindowInnerWidth < 768
              ? 'https://assets.ccbp.in/frontend/react-js/about-sm-img.png'
              : 'https://assets.ccbp.in/frontend/react-js/about-lg-img.png'
          }
          alt="about"
        />
      </div>
    </div>
  )
}

export default About
