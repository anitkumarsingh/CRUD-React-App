import React,{ Fragment,Component } from 'react';
import { Header, Footer } from './Layouts';
import Exercise from './Exercise';
import { muscles,exercises } from '../Store';

class App extends Component{
    state={
        exercises,
        exercise:{}
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
    handleCategoryChange = (category)=>{
      this.setState({category})
    }
    handleExerciseChange = id =>{
        this.setState(({ exercises })=>({
            exercise:exercises.find(ex => ex.id === id)
        }))
    }
    render(){
    const exercises= this.getExercisesByMuscles();
    const { category,exercise } = this.state
    return(
    <Fragment>
        <Header muscles={muscles} />
        <Exercise 
          exercises={exercises}
          catergory={category}
          onSelect={this.handleExerciseChange}
          exercise={exercise}
        />
        <Footer 
          muscles={muscles} 
          onSelect ={this.handleCategoryChange}
          catergory ={category}
         />
    </Fragment>
                
    )
 }
}
export default  App;