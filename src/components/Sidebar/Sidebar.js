import React, { Component } from 'react';
class Sidebar extends Component {

    render() {
        return (
            <div className="sidebar">
                <div className="sidebar-content">
                    <div className="sidebar-header">
                        <h1 className="sidebar-header-title">JOTFORM BLOG</h1>
                       
                    </div>
                    <div className="sidebar-content-links">
                        <a className="sidebar-content-link"   href="Jotblog">JOTBLOG</a>
                        <a className="sidebar-content-link"  href="Blogposts">Blog Post</a>
                     </div>  
                     <div class="sticky-container">
    <ul class="sticky">
        <li>
            <img src="https://cdn4.iconfinder.com/data/icons/social-media-icons-the-circle-set/48/facebook_circle-512.png" width="32" height="32" />
            <p><a href="https://tr-tr.facebook.com/JotForm" target="_blank">Like Us on<br />Facebook
            </a></p>
        </li>
        <li>
            <img src="http://icons.iconarchive.com/icons/xenatt/the-circle/512/App-Twitter-icon.png" width="32" height="32" />
            <p><a href="https://twitter.com/jotform" target="_blank">Follow Us on<br />Twitter</a></p>
        </li>
       
        <li>
            <img src="https://cdn4.iconfinder.com/data/icons/social-media-icons-the-circle-set/48/linkedin_circle-512.png" width="32" height="32" />
            <p><a href="https://tr.linkedin.com/company/jotform" target="_blank">Follow Us on<br />LinkedIn</a></p>
        </li>
        <li>
            <img src="http://www.vectorico.com/download/social_media/youtube-red-circle.png" width="32" height="32" />
            <p><a href="https://www.youtube.com/user/TheJotForm/videos" target="_blank">Subscribe on<br />YouYube</a></p>
        </li>
      
    </ul>
</div>
                </div>
            </div>
        );
    }
}
export default Sidebar;