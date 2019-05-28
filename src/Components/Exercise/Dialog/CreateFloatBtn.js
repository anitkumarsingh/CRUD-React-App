import React, { Component } from 'react';
import AddIcon from '@material-ui/icons/Add';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import green from '@material-ui/core/colors/blue';
import { 
        withStyles,
        Fab,
        DialogTitle,
        DialogContent,
        DialogActions,
        Dialog,
        Button,
        Select,
        TextField,
        FormControl,
        InputLabel,
        FormHelperText,
        Input,
        MenuItem
     } from '@material-ui/core';

const styles = theme =>({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
      },
      margin: {
        margin: theme.spacing(1),
      },
    buttonst:{
        position: 'absolute',
        bottom: '0',
        right: '20px',
        top: '530px'
    },
    formControl:{
      width:400
    } 
})
  
  const theme = createMuiTheme({
    palette: {
      primary: green,
    },
  });
class CreateFloatBtn extends Component{
    state ={
        open:false,  
        exercise:{
          title:'',
          description:'',
          muscles:''
        }
    }
    handleToggle = () =>{
        this.setState({open:!this.state.open})
      }
      handleChange = name => event => {
        this.setState({
          ...this.state,
          [name]: event.target.value,
        });
      };
      handleChangeText = name =>event =>{
        this.setState({
          exercise:{
           ...this.state.exercise,
           [name]:event.target.value
          }
         
        })
      }
    render(){ 
        const { classes,muscles:categories } = this.props;
        const { open , exercise:{title,description,muscles}} = this.state
        return (
        <div>
            <Fab color="primary" aria-label="Add" onClick={this.handleToggle} 
                className={classes.buttonst}>
             <AddIcon />
           </Fab>
           <Dialog open={open} onClose={this.handleClose} 
                   aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Create an exerices</DialogTitle>
                <DialogContent>
                   Fill out the form below.
                </DialogContent>
                <form className={[classes.formControl,classes.root].join('')}>
                   <ThemeProvider theme={theme}>
                        <TextField
                           className={[classes.formControl,classes.margin].join(' ')}
                           label={title}
                           onChange={this.handleChangeText('title')}
                        /><br/>
                         <TextField
                            multiline
                            rowsMax="4"
                            className={[classes.formControl,classes.margin].join(' ')}
                            label={description}
                            onChange={this.handleChangeText('description')}
                        /><br/>
                        <FormControl className={classes.formControl}>
                            <InputLabel htmlFor="age-native-helper"  className={classes.margin}>Category</InputLabel>
                            <Select
                                value={muscles}
                                input={<Input name="age" id="age-native-helper" />}
                                onChange={this.handleChangeText('muscles')}
                                className={[classes.formControl,classes.margin].join(' ')}
                            >
                                {categories.map((cat)=>{
                                  return(
                                    <div key={cat + 'id'}>
                                    <MenuItem value={cat}>{cat}</MenuItem>
                                    </div>
                                  )
                                })}
                            </Select>
                            <FormHelperText  className={classes.margin}>Select Category</FormHelperText>
                        </FormControl>
                </ThemeProvider>
                   </form>
                <DialogActions>
                    <Button onClick={this.handleToggle} color="primary" outline="true">
                       Create
                    </Button>
                </DialogActions>
           </Dialog>
        </div>
      )
   }
}
export default withStyles(styles)(CreateFloatBtn);