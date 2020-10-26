import React from 'react'
import himg from './image/images.jpg';
import Comon from './Comon';
const About = () =>{

    return (
        <div>
        <Comon name='Welcome to you.'
         imgsrc={himg} 
         btname='Contect Now'
         visit="/contect"
         />
        </div>
    )
}
export default About;