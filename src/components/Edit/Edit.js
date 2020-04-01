import ReactModal from 'react-modal';
import React from 'react';
import axios from 'axios';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import Editpost from '../../svgs/editpost';
import Returnbutton from '../../svgs/returnbutton';
import Deletepost from '../../svgs/deletepost';


class Edit extends React.Component {
  submit = () => {
    confirmAlert({
      title: 'Are you sure you want to delete?',
      buttons: [
        {
          label: 'Yes',
          onClick: () => this.onClickH()
        },
        {
          label: 'No',
          onClick: () => this.handleOpenModal()
        }
      ]
    });
  };
  constructor () {
    super();
    this.state = {
      showModal: false
    };
    
    
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }


  
  onClickH = () =>{
    const { submissionID } = this.props;
    axios.delete(`https://api.jotform.com/submission/${submissionID}?apiKey=0f9a5cbd539391d967ec528ac1868d10`);
    window.location.reload(false);
  
  }
  handleOpenModal () {
    this.setState({ showModal: true })
   
    
  }
  
  handleCloseModal () {
    this.setState({ showModal: false });
    window.location.reload(false);
    
  }
  
  render () {
    const {submissionID} = this.props;
    // console.log(submissionID)
    return (
     
     <div>
        <button className="edit" onClick={this.handleOpenModal}> {Editpost()}
      
        </button>

      
        
        <ReactModal 
           isOpen={this.state.showModal}
           
           contentLabel="Minimal Modal Example"
        >
          <iframe  className="blog-edit" title="blog" src={`https://www.jotform.com/form.php?mode=inlineEdit&formID=92496127299976&sid=${submissionID}`} ></iframe>
         <div className="blog-edit-delete-return">
           <div className="blog-edit-delete-return-deletee"> 
              <button className="deletee" onClick={this.submit}> {Deletepost()} </button>
           </div>

           <div>
              <button className="returr"onClick={this.handleCloseModal}>{Returnbutton()}</button>
           </div>  
          </div>
        </ReactModal>
      </div>
    );
  }
}

export default Edit;