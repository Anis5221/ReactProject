import React, { Component } from 'react';
import Comon from './Comon';
import himg from './image/images.jpg';

class Home extends Component{
    
    render(){

        return (
            
            <div>
            <Comon name='We are telented team for you to making Web Aplication' 
            imgsrc={himg}
             btname="Get Started"
             visit="/service"
             />
            </div>
        )
    }
}

export default Home;

