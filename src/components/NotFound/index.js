import Header from '../Header'

import './index.css'

const NotFound = () => (
  <div className="not-found-container">
    <Header />
    <div className="not-found-content-container">
      <img
        className="not-found-content-img"
        src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
        alt="not found"
      />
      <h1 className="not-found-content-header">Lost Your Way?</h1>
      <p className="not-found-content-description">
        {`Sorry, we cannot find that page. You will find lots to explore on the
        home page`}
      </p>
    </div>
  </div>
)

export default NotFound
