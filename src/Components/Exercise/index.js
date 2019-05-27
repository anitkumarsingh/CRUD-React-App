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

const Exercise = ({exercises,catergory,exercise}) =>{
    console.log(catergory);
    return(
        <Grid container>
          <Grid item sm={4}>
             <LeftPanel  styles={styles} propsData={exercises}
              propsCategoryData={catergory}
              prosExercise={exercise}
             />
          </Grid>
          <Grid item sm>
              <RightPanel styles={styles}
               prosExercise={exercise}
              />
          </Grid>
        </Grid>
    )
}
export default Exercise;