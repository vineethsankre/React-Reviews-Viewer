import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {
    index: 0,
  }

  onClickPrev = () => {
    const {index} = this.state
    if (index > 0) {
      this.setState(prevState => ({index: prevState.index - 1}))
    }
  }

  onClickNext = () => {
    const {index} = this.state
    if (index < 3) this.setState(prevState => ({index: prevState.index + 1}))
  }

  render() {
    const {index} = this.state
    const {reviewsList} = this.props
    const reviewItem = reviewsList[index]
    const {imgUrl, username, companyName, description} = reviewItem
    return (
      <div className="app-container">
        <h1 className="heading">Reviews</h1>
        <img src={imgUrl} className="user-image" alt={username} />
        <div className="carousel-container">
          <button
            data-testid="leftArrow"
            type="button"
            className="arrow-btn"
            onClick={this.onClickPrev}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              className="arrow"
              alt="left arrow"
            />
          </button>
          <p className="username">{username}</p>
          <button
            data-testid="rightArrow"
            type="button"
            className="arrow-btn"
            onClick={this.onClickNext}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              className="arrow"
              alt="right arrow"
            />
          </button>
        </div>
        <p className="company-name">{companyName}</p>
        <p className="description">{description}</p>
      </div>
    )
  }
}

export default ReviewsCarousel
