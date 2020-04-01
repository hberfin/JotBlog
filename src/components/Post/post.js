import React from 'react';

import ReactModal from 'react-modal';



class RealPost extends React.Component{
  constructor () {
    
    super();
    this.state = {
      showModal: false
    };
    
    
    
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  
  onClickH = () =>{
   
    window.location.reload(false);
  
  }
  handleOpenModal () {
    this.setState({ showModal: true })
   
    
  }
  
  handleCloseModal () {
    this.setState({ showModal: false });
    // window.location.reload(false);
    
  }
  


    render(){
      
        const { content, images} = this.props;
    
    
return(

  
<div className="dkdkdkd">
  <button className="post-readmore" onClick={this.handleOpenModal}> 
dkdk
  </button> 
  <ReactModal 
           isOpen={this.state.showModal}
           
           contentLabel="Minimal Modal Example"
        >

      <div className="post">
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
           
</div>
</div> 
           <div>
              <button className="returr"onClick={this.handleCloseModal}>return</button>
           </div>  
          
</ReactModal>
</div>
  

) }}
        export default RealPost;