import React,{ Fragment,Component } from 'react';
import { Header, Footer } from './Layouts';
import Exercise from './Exercise';
import { muscles,exercises } from '../Store';

class App extends Component{
    state={
        exercises,
        category:'all'
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
    render(){
        const exercises= this.getExercisesByMuscles();
        const { category } = this.state
        console.log(category);
       
    return(
    <Fragment>
        <Header/>
        <Exercise exercises={exercises}
          catergory ={category}
        />
        <Footer muscles={muscles} 
         onSelect ={this.handleCategoryChange}
         catergory ={category}
         />
    </Fragment>
                
    )
 }
}
export default  App;