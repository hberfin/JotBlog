import React from 'react';
// import './App.scss';
import './css.scss';
import PostContainer from './PostContainer';
import Sidebar from './components/Sidebar/Sidebar';
import { getFormPost2 } from './components/actions';
import axios from 'axios';
import Jotblog from './components/Jotblog/Jotblog';
import { Route, BrowserRouter as Router } from 'react-router-dom';




class App extends React.Component {

  constructor() {
    super()
    this.state = {
      postData: []
    }
  }


  componentDidMount() {
    axios.get('https://api.jotform.com/form/92496127299976/submissions?apiKey=0f9a5cbd539391d967ec528ac1868d10')
      .then(response => {
        this.setState({ postData: getFormPost2(response.data) });
      
      })
      .catch(error => {
        console.log(error);
      });
  
  }

  render() {
    const { postData } = this.state;
   
   
    return (
      <div className="flex">
        <Sidebar />
        <Router>
          <div className="content-box">
            <div className="content">
              <Route
                exact path="/" render={
                  () => {
                    return (<PostContainer postDataTest={postData} />)
                   
                  }
                }

              />

              <Route
                path="/Jotblog" render={
                  () => {
                    return <Jotblog />
                  }
                }

              />
              <Route
                path="/Blogposts" render={
                  () => {
                    return <PostContainer postDataTest={postData} />
                  }
                }

              />

            </div>
          </div>
        </Router>
      </div>
    );
  }

}
export default App;
