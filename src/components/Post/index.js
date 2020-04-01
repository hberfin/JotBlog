import React, { Component } from 'react';
import RandomColor from '../../utils/';
// import axios from 'axios';
import Edit from '../../components/Edit/Edit';
// import Returnbutton from '../../svgs/returnbutton';
import Seperator from '../../svgs/seperator';


class Post extends Component {


  returnn(e) {
    const { parentNode } = e.target;
    console.log("jdd", parentNode)
    if (parentNode.style.display === "block") {
      parentNode.style.display = "none";

    }
    else {

    }
  }


  poost(e) {
    const { parentNode } = e.target;
    if (parentNode.querySelector('.post').style.display === "none") {
      parentNode.querySelector('.post').style.display = "block";
      // parentNode.querySelector('.post').style.transition = "15s"; 
    }
    else {
      parentNode.querySelector('.post').style.display = "none";
    }
  }



  render() {
    const { submissionID } = this.props;
    const { title, avatar_url, author, content, tags, images_url, images, createdAt } = this.props;
    var css = { background: 'url(' + images_url + ') 0 0/cover no-repeat ', };

    return (
      <div className="post-container">
        <div className="infoo"
          style={css}
        >

        </div>
        <div className="info">

          <div className="created-edit">
            <div className="created">
              <div className="created-at">{createdAt}</div>
              <Edit submissionID={submissionID} />
            </div>
            <div className="post-subhead-avatar-container">
              <h1 className="post-subhead-avatar-container-text">{title} </h1>

              <div className="post-subhead-avatar-container-avatar">

                <img
                  style={{ borderColor: RandomColor() }}
                  src={avatar_url}
                  className="post-subhead-avatar-container-avatar-image"
                  alt="resim"
                />

              </div>
            </div>

          </div>
          <div className="post-user-info">

            <p>
              By <a href="#link" className="post-user-info-user-name">
                {author}
              </a>{' '}
              under {' '}
              {tags.split(',').map((tag, key) =>
                tag && (
                  <a key={key}
                    href="#link"
                    className="button"
                    style={{ backgroundColor: RandomColor() }}
                  >
                    {tag}

                  </a>
                )
              )}
            </p>
          </div>

          <button onClick={e => this.poost(e)} className="return">
            Read
        </button>


          <div className="post"  >
            <div className="post-content" >
              <div className="post-text">
                <p className="post-text-paragraph">{content} </p>
              </div>
              {images && (
                <div className="images">
                  {images.map((image, key) =>
                    image && (
                      <div key={key} className="img">
                        <img alt="img "
                          src={image}
                        />
                        <a href="#link" className="image-text">{image.txt}</a>
                      </div>)
                  )}
                </div>
              )}

            </div>

            <button className="returnn" onClick={e => this.returnn(e)}>Return</button>

          </div>  </div>
        <div className="seperator">{Seperator()}</div>
        {/* <RealPost /> */}
        {/* <div className="post">
        <div className="post-content">
          <div className="post-text">
            <p className="post-text-paragraph">{content} </p>
          </div>
          {images && (
            <div className="images">
              {images.map((image, key) =>
                image && (
                  <div key={key} className="img">
                    <img alt="img "
                      src={image}
                    />
                    <a href="#link" className="image-text">{image.txt}</a>
                  </div>)
              )}
            </div>
          )}
            <button onClick={e => this.onClickHandler(e)} className="accordion">
          {Readmore()}
        </button>
        </div></div>  
           */}

      </div>


    );

  }
}

export default Post;
