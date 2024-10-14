import React, { Component } from "react"
import { Link } from "react-router-dom";

export class NavBar extends Component {
  static propTypes = {};

  render() {
    return (
      <div>
        <header id="navbar">
          <nav className="navbar-container container">
            <Link to="/" className="home-link">
              <div className="navbar-logo"></div>
              ARY - News
            </Link>
            <button
              type="button"
              id="navbar-toggle"
              aria-controls="navbar-menu"
              aria-label="Toggle menu"
              aria-expanded="false"
            >
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <div id="navbar-menu" aria-labelledby="navbar-toggle">
              <ul className="navbar-links">
                {/* <li className="navbar-item"> */}
                  {/* <Link className="navbar-link" to="/about"> */}
                    {/* About */}
                  {/* </Link> */}
                {/* </li> */}
                {/* <li className="navbar-item"> */}
                  {/* <Link className="navbar-link" to="/blog"> */}
                    {/* Blog */}
                  {/* </Link> */}
                {/* </li> */}
                {/* <li className="navbar-item"> */}
                  {/* <Link className="navbar-link" to="/careers"> */}
                    {/* Careers */}
                  {/* </Link> */}
                {/* </li> */}
                <li className="navbar-item">
                  
                  </li>

                 <li className="navbar-item"><Link className="navbar-link" to="/Business">Business</Link></li>
                 <li className="navbar-item"><Link className="navbar-link" to="/Entertainment">Entertainment</Link></li>
                 <li className="navbar-item"><Link className="navbar-link" to="/General">General</Link></li>
                 <li className="navbar-item"><Link className="navbar-link" to="/Health">Health</Link></li>
                 <li className="navbar-item"><Link className="navbar-link" to="/Science">Science</Link></li>
                 <li className="navbar-item"><Link className="navbar-link" to="/Sports">Sports</Link></li>
                 <li className="navbar-item"><Link className="navbar-link" to="/technology">technology</Link></li>
              
              </ul>
            </div>
          </nav>
        </header>
      </div>
    );
  }
}

export default NavBar;
