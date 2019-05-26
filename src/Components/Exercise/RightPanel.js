import React from 'react';
import { Paper,Typography } from '@material-ui/core'

export default ({ styles }) =>{
    return(
        <Paper style={styles.Paper}>
            <Typography variant="h4" component="h4" 
             gutterBottom>Welcome!
             </Typography>
            <Typography variant="title" component="h4">
                Please select list on left panel
            </Typography>
       </Paper>
    )
}