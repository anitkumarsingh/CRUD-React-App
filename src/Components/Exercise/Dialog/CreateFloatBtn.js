import React, { Component } from 'react';
import AddIcon from '@material-ui/icons/Add';
import { 
        withStyles,
        Fab,
        DialogTitle,
        DialogContentText,
        DialogContent,
        DialogActions,
        Dialog,
        Button
     } from '@material-ui/core';

const styles = theme =>({
    buttonst:{
        position: 'absolute',
        bottom: '0',
        right: '20px',
        top: '530px'
    } 
})
class CreateFloatBtn extends Component{
    state ={
        open:false,  
    }
    handleToggle = () =>{
        this.setState({open:!this.state.open})
      }

    render(){ 
        const { classes } = this.props;
        return (
        <div>
            <Fab color="primary" aria-label="Add" onClick={this.handleToggle} 
                className={classes.buttonst}>
             <AddIcon />
           </Fab>
           <Dialog open={this.state.open} onClose={this.handleClose} 
                   aria-labelledby="form-dialog-title">
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
export default withStyles(styles)(CreateFloatBtn);