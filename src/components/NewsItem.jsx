import React, { Component } from "react";

export default class NewsItem extends Component {
  render(props) {
    let {imageUrl,url,title,discription} = this.props;
    return (
      <>
        <div className="card text-center mx-4 my-4 newsitem" style={{ width: "18rem" }}>
          <img
            src={imageUrl}
            className="card-img-top"
            alt="..."
            style={{height:"25vh"}}
          />
          <div className="card-body">
            <h6 className="card-title ">{title}</h6>
            <p className="card-text" style={{height:"16vh"}}>
              {discription}
            </p>
            <a href={url} target="_blank" rel="noreferrer" className="btn btn-light">
              View Full News
            </a>
          </div>
        </div>
      </>
    );
  }
}
