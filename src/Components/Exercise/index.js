import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Paper } from '@material-ui/core';

const Exercise = (props) =>{
    return(
        <Grid container>
          <Grid item sm={4}>
              <Paper>
                  Left Panel
              </Paper>
          </Grid>
          <Grid item sm>
              <Paper>
                  Right Panel
              </Paper>
          </Grid>
        </Grid>
    )
}
export default Exercise;