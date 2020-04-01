import React, { Component, Fragment } from 'react';
import Post from './components/Post/';


class PostContainer extends Component {

    render() {
        const { postDataTest } = this.props;
        // console.log("dkdk",postDataTest)
        return (
            <Fragment>
                {/* <div className="content-underline">
                    <div className="content-underline-subhead">
                        <h3 className="content-underline-subhead-text">PINNED POSTS</h3>
                    </div>
                </div> */}

                {Object.keys(postDataTest).map(index => (
                    
                    <Post key={index}
                        title={postDataTest[index].title}
                        avatar_url={postDataTest[index].avatar_url}
                        createdAt={postDataTest[index].createdAt}
                        author={postDataTest[index].author}
                        tags={postDataTest[index].tags}
                        content={postDataTest[index].content}
                        images={postDataTest[index].related_images}
                        submissionID={postDataTest[index].submissionID}
                        index={index}
                        images_url={postDataTest[index].related_images_url}
                     
                    />

                        
                )
                )
                }
               
{/*                
               {Object.keys(postDataTest).map(index => (
                    
                    <RealPost key={index}
                        title={postDataTest[index].title}
                        content={postDataTest[index].content}
                        images={postDataTest[index].related_images}
                        submissionID={postDataTest[index].submissionID}
                        index={index}
                        images_url={postDataTest[index].related_images_url}
                     
                    />

                        
                )
                )
                } */}
                
            </Fragment>
        );
    }
}
export default PostContainer;