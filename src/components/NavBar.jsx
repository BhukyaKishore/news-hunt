import React, { Component } from "react";

export default class NavBar extends Component {
  render() {
    return (
      <div>
        <nav className={`navbar navbar-expand-lg bg-dark p-3`}>
          <div className="container-fluid">
            <a className="navbar-brand text-white" href="/" style={{fontSize:"30px"}}>
              News-Hunt
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active text-white" aria-current="page" href="/">
                    Explore
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white" href="/">
                    About
                  </a>
                </li>
              </ul>
              <form className="d-flex" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-outline-success text-white" type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>
        </nav>
        ;
      </div>
    );
  }
}
