import React,{ Fragment } from 'react';
import { Header, Footer } from './Layouts';
import Exercise from './Exercise';

const App = () =>{
    return(
    <Fragment>
        <Header/>
        <Exercise/>
        <Footer/>
    </Fragment>
                
    )
}
export default  App;