import React, { Fragment } from 'react';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import { withStyles } from '@material-ui/core/styles';


const styles = theme => ({
    fab: {
      margin: theme.spacing(1),
      position: 'absolute',
      bottom: theme.spacing(2),
      right: theme.spacing(2),
    },
  });

 const Footer = ({ muscles}) =>{
   console.log(muscles);
     return(
        <Paper >
        <Tabs
            value={0}
            indicatorColor="primary"
            textColor="primary"
            centered
        >   
            <Tab label="All" />
            {muscles.map((item,id)=><Tab label={item} key={id +'i'} />)}
      </Tabs>
    <Fab color="primary" aria-label="Add" >
        <AddIcon />
    </Fab>
    </Paper>
     )
 }
 export default withStyles(styles)(Footer);