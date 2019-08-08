// import { Link } from "gatsby"
// import PropTypes from "prop-types"
import React from "react"

class Header extends React.Component {

  state = {
    active: false
  }

  constructor(props, state) {
    super(props, state);

    this.onClickToggle = this.onClickToggle.bind(this);
  }

  onClickToggle(e) {
    e.preventDefault();
    let active = !this.state.active;
    this.setState({ active });
  }

  render() {
    let siteTitle = this.props.siteTitle || 'Course name';
    let activeClass = this.state.active
      ? 'nav-main--active'
      : '';

    return (
      <header className="masthead masthead--course">
    		<p className="masthead__pre-tagline">
    			<a className="masthead__pre-tagline__link" href="https://learnuxd.com" title="Learn UXD">
    				<svg className="logo logo--dark" viewBox="0 0 298 40" xmlns="http://www.w3.org/2000/svg">
    					<path d="M.5 39.032V3h4.096v32.448h19.968v3.584H.5zm36.344-3.456H57.58v3.456H32.812V3H56.94v3.648H36.844v12.416H52.78v3.456H36.844v13.056zm27.192 3.456L76.708 3h6.784l12.864 36.032h-4.352L88.1 27.768H72.292l-3.904 11.264h-4.352zm16.192-34.24l-6.784 19.52h13.504l-6.72-19.52zm24.184 34.24V3h11.904c4.565 0 8.096.725 10.592 2.176 2.496 1.45 3.744 4.16 3.744 8.128 0 2.56-.693 4.768-2.08 6.624-1.387 1.856-3.51 2.784-6.368 2.784 1.792 0 3.125.384 4 1.152.875.768 1.472 1.739 1.792 2.912.32 1.173.501 2.39.544 3.648.043 1.259.128 2.4.256 3.424s.437 1.77.928 2.24c.49.47 1.333.49 2.528.064v2.688c-.384.341-.97.587-1.76.736-.79.15-1.61.096-2.464-.16-.853-.256-1.568-.832-2.144-1.728-.576-.896-.864-2.219-.864-3.968 0-2.645-.15-4.693-.448-6.144-.299-1.45-.97-2.475-2.016-3.072-1.045-.597-2.677-.939-4.896-1.024-2.219-.085-5.248-.085-9.088 0v15.552h-4.16zm4.16-18.688h8.384c3.37 0 5.877-.448 7.52-1.344 1.643-.896 2.464-2.71 2.464-5.44 0-2.133-.448-3.701-1.344-4.704-.896-1.003-2.187-1.643-3.872-1.92-1.685-.277-3.765-.416-6.24-.416h-6.912v13.824zM166.74 3h4.16v36.032h-7.744l-17.92-34.176h-.128v34.176h-4.16V3h7.232l18.432 34.176h.128V3zm30.928 36.928c-5.248 0-9.227-1.419-11.936-4.256-2.71-2.837-4.064-6.837-4.064-12V3h8.256v20.608c0 2.517.416 4.416 1.248 5.696.832 1.28 1.845 2.144 3.04 2.592 1.195.448 2.347.672 3.456.672 1.28 0 2.517-.224 3.712-.672 1.195-.448 2.176-1.312 2.944-2.592.768-1.28 1.152-3.179 1.152-5.696V3h8.256v20.672c0 5.248-1.333 9.27-4 12.064-2.667 2.795-6.688 4.192-12.064 4.192zm23.416-.896l12.608-18.944L222.044 3h9.152l7.68 12.544L246.556 3h9.024l-11.52 17.088 12.608 18.944h-8.96l-8.832-14.144-8.768 14.144h-9.024zm75.96-18.048c0 4.736-.939 8.416-2.816 11.04-1.877 2.624-4.533 4.448-7.968 5.472-3.435 1.024-7.456 1.536-12.064 1.536h-10.112V3h10.112c4.608 0 8.63.672 12.064 2.016 3.435 1.344 6.09 3.339 7.968 5.984 1.877 2.645 2.816 5.973 2.816 9.984zM271.7 32.696h4.8c2.517 0 4.704-.31 6.56-.928 1.856-.619 3.285-1.77 4.288-3.456 1.003-1.685 1.504-4.15 1.504-7.392 0-3.755-1.11-6.57-3.328-8.448-2.219-1.877-5.227-2.816-9.024-2.816h-4.8v23.04z" />
    				</svg>
          </a>
    			<span className="masthead__pre-tagline__connector">presents</span>
    		</p>
    		<h1 className="masthead__brand brand">
    			<a className="brand__course-name" href="/">{siteTitle}</a>
    		</h1>
    		<nav className={`masthead__nav nav-main ${activeClass}`}>
    			<button onClick={this.onClickToggle} className="btn--unstyled nav-main__toggle" title="Mobile Navigation Toggle">
    				<i className="far fa-bars"></i>
    			</button>
    			<ul className="nav-main__items">
    				<li className="nav-main__item nav-main__item--active">
    					<a className="nav-main__link" href="/">Home</a>
    				</li>
    				<li className="nav-main__item">
    					<a className="nav-main__link" href="/lessons/index.html">Lessons</a>
    				</li>
    				<li className="nav-main__item">
    					<a className="nav-main__link" href="/activities/index.html">Activities</a>
    				</li>
    				<li className="nav-main__item">
    					<a className="nav-main__link" href="/resources.html">Resources</a>
    				</li>
    			</ul>
    		</nav>
    	</header>
    );
  }
}

// const Header = ({ siteTitle }) => {
//   Header.propTypes = {
//     siteTitle: PropTypes.string,
//   }
//
//   Header.defaultProps = {
//     siteTitle: ``,
//   }
// }

export default Header;
