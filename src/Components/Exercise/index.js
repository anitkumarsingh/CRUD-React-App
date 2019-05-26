import React from 'react';
import Grid from '@material-ui/core/Grid';
import LeftPanel from './LeftPanel';
import RightPanel from './RightPanel';

const styles ={
    Paper:{
        padding:20,
        marginTop:10,
        marginBottom:10
    }
}

const Exercise = (props) =>{
    return(
        <Grid container>
          <Grid item sm={4}>
             <LeftPanel  styles={styles}/>
          </Grid>
          <Grid item sm>
              <RightPanel styles={styles}/>
          </Grid>
        </Grid>
    )
}
export default Exercise;