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
        NativeSelect,
        TextField,
        FormControl,
        InputLabel,
        FormHelperText,
        Input
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
        age: '',
        name: 'hai',
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
    
    render(){ 
        const { classes } = this.props;
        // const classes = useStyles();
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
                   <form>
                   <ThemeProvider theme={theme}>
                        <TextField
                           className={classes.margin}
                           label="Title"
                           id="mui-theme-provider-standard-input"
                        /><br/>
                        <FormControl className={classes.formControl}>
                            <InputLabel htmlFor="age-native-helper">Category</InputLabel>
                            <NativeSelect
                                fullWidth
                                value={this.state.age}
                                onChange={this.handleChange('age')}
                                input={<Input name="age" id="age-native-helper" />}
                            >
                                <option value="" />
                                <option value={10}>Ten</option>
                                <option value={20}>Twenty</option>
                                <option value={30}>Thirty</option>
                            </NativeSelect>
                            <FormHelperText>Select Category From Drop Down List</FormHelperText>
                        </FormControl><br/>
                         <TextField
                            multiline
                            rowsMax="4"
                            className={classes.margin}
                            label="Description"
                            id="mui-theme-provider-standard-input"
                        />
                </ThemeProvider>

                   </form>
                </DialogContent>
                <DialogActions>
                    <Button onClick={this.handleToggle} color="primary" outline="true">
                        Close
                    </Button>
                </DialogActions>
           </Dialog>
        </div>
      )
   }
}
export default withStyles(styles)(CreateFloatBtn);