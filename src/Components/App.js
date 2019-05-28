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
      const initialExeriseData = muscles.reduce((exercises,category)=>({
         ...exercises,
         [category]:[]
      }),{})
      // console.log(muscles,initialExeriseData);
        return Object.entries(
         this.state.exercises.reduce((exercises,exercise)=>{
         const { muscles } = exercise;
         exercises[muscles]= [...exercises[muscles],exercise]
         
         return exercises;
        },initialExeriseData)
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
    handleExerciseCreate = exercise =>{
    this.setState(({exercises})=>({
      exercises:[
        ...exercises,
        exercise
      ]
    }))
    }
    onDeleteHandle = id =>{
      this.setState(({exercises})=>({
       exercises:exercises.filter((ex)=>ex.id !== id)
      }))
    }
    render(){
    const exercises= this.getExercisesByMuscles();
    const { category,exercise } = this.state
    return(
    <Fragment>
        <Header 
         muscles={muscles} 
         onExerciseCreate={this.handleExerciseCreate}
         />
        <Exercise 
          exercises={exercises}
          catergory={category}
          onSelect={this.handleExerciseChange}
          exercise={exercise}
          onDelete={this.onDeleteHandle}
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