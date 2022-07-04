import './index.css'

const Header = props => {
  const {score, timer} = props

  return (
    <nav className="navbar-container">
      <div className="title-with-timer-score-container">
        <div className="logo-and-title-container">
          <img
            className="match-game-logo"
            scr="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
            alt="website logo"
          />
        </div>
        <div className="score-and-timer-container">
          <p className="score-text">
            score: <span className="number-count"> {score}</span>
          </p>
          <div className="timer-container">
            <div className="timer-image-container">
              <img
                className="timer-image"
                src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
                alt="timer"
              />
            </div>
            <p className="number-count">{timer} sec</p>
          </div>
        </div>
      </div>
    </nav>
  )
}
export default Header
