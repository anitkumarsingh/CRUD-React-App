import React from 'react';
import Grid from '@material-ui/core/Grid';
import LeftPanel from './LeftPanel';
import RightPanel from './RightPanel';
import './Scroll.css';

const styles ={
    Paper:{
        padding:20,
        marginTop:10,
        marginBottom:10,
        height:500,
        overflowY:'auto'
    }
}

const Exercise = (props) =>{
    console.log(props.exercises);
    return(
        <Grid container spacing={12}>
          <Grid item sm={4}>
             <LeftPanel  styles={styles} propsData={props.exercises}/>
          </Grid>
          <Grid item sm>
              <RightPanel styles={styles}/>
          </Grid>
        </Grid>
    )
}
export default Exercise;