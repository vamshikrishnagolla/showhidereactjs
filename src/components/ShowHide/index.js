// Write your code here
import {Component} from 'react'

import './index.css'

class ShowHide extends Component {
  state = {showhidefirst: false, showhidelast: false}
  nameshowfirst = () => {
    this.setState(prevState => ({showhidefirst: !prevState.showhidefirst}))
  }
  nameshowlast = () => {
    this.setState(prevState => ({showhidelast: !prevState.showhidelast}))
  }
  render() {
    const {showhidefirst, showhidelast} = this.state

    return (
      <div className="container">
        <h1 className="heading">Show/Hide</h1>
        <div className="buttonscontainer">
          <div className="name-container">
            <button className="button" onClick={this.nameshowfirst}>
              Show/Hide Firstname
            </button>
            {showhidefirst && <p class="name">Joe</p>}
          </div>
          <div className="name-container">
            <button className="button" onClick={this.nameshowlast}>
              Show/Hide Lastname
            </button>
            {showhidelast && <p class="name">Jonas</p>}
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
