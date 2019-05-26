import React,{ Fragment,Component } from 'react';
import { Header, Footer } from './Layouts';
import Exercise from './Exercise';
import { muscles,exercises } from '../Store';

class App extends Component{
    state={
        exercises
    }
    getExercisesByMuscles = () =>{
        return Object.entries(this.state.exercises.reduce((exercises,exercise)=>{
         const { muscles } = exercise;
         exercises[muscles]= exercises[muscles]
         ?[...exercises[muscles],exercise]
         :[exercise]
         return exercises;
        },{})
        )
       
    }
    render(){
        const exercises= this.getExercisesByMuscles();
        console.log(exercises);
    return(
    <Fragment>
        <Header/>
        <Exercise exercises={exercises}/>
        <Footer muscles={muscles}/>
    </Fragment>
                
    )
 }
}
export default  App;