import Header from '../Header'

import './index.css'

const Home = () => {
  const getWindowInnerWidth = () => window.innerWidth
  const currentWindowInnerWidth = getWindowInnerWidth()

  return (
    <div className="home-container">
      <Header />
      <div className="home-content-container">
        <img
          className="home-content-img"
          src={
            currentWindowInnerWidth < 768
              ? 'https://assets.ccbp.in/frontend/react-js/home-sm-img.png'
              : 'https://assets.ccbp.in/frontend/react-js/home-lg-img.png'
          }
          alt="home"
        />
      </div>
    </div>
  )
}

export default Home
