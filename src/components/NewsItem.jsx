import React, { Component } from "react";

export default class NewsItem extends Component {
  render(props) {
    let { imageUrl, url, title, author, source, date, discription } =
      this.props;
    return (
      <>
        <div
          className="card text-center mx-4 my-4 newsitem container-fluid"
        >
          <span className="badge rounded-pill text-sm text-bg-danger  w-50 position-absolute top-0 end-0">
            {source}
          </span>
          <img
            src={imageUrl}
            className="card-img-top"
            alt="..."
            style={{ height: "250px" }}
          />
          <div className="card-body">
            <h6 className="card-title ">{title}</h6>
            <p className="card-text" style={{ height: "140px" }}>
              {discription}
            </p>
            <hr />
            <p className="card-text">
              <small className="text-body-white">
                <b>
                  By {author} on {new Date(date).toGMTString()}
                </b>
              </small>
            </p>
            <a
              href={url}
              target="_blank"
              rel="noreferrer"
              className="btn btn-light"
            >
              View Full News
            </a>
          </div>
        </div>
      </>
    );
  }
}
