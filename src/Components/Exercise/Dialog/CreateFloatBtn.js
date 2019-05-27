import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';


class CreateFloatBtn extends Component{
    state ={
        open:false,  
    }
    handleToggle = () =>{
        this.setState({open:!this.state.open})
      }

    render(){ 
        return (
        <div>
            <Fab color="primary" aria-label="Add" onClick={this.handleToggle} >
             <AddIcon />
           </Fab>
           <Dialog open={this.state.open} onClose={this.handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Create</DialogTitle>
                <DialogContent>
                <DialogContentText>
                   Create list of exercises!
                </DialogContentText>
                </DialogContent>
                <DialogActions>
                <Button onClick={this.handleToggle} color="primary">
                    Close
                </Button>
                </DialogActions>
           </Dialog>
        </div>
      )
   }
}
export default CreateFloatBtn;