import React from "react";
import Proppass from "../Components/Proppass";
import TrueOption from "../Components/TrueOption";
import '../index.css'


const Home = () => {


    
    return (
        <>
           
            <h1>Welcome to home screen </h1>
           
             <Proppass 
            topic = "Title is from home jsx component"

            />
            
             <Proppass 
            topic = " Second Title is from home jsx component"

            /> 

            <TrueOption
                xxx = '😁'
                yyy = '😁'
                zzz = '😁'
            />
            <TrueOption
                xxx = '😁'
                yyy = '😁'
                zzz = '🤩'
            />
            <TrueOption
                xxx = '🍔'
                yyy = '🍗'
                zzz = '🍛'
            />
            <TrueOption
                xxx = '🍟'
                yyy = '🍟'
                zzz = '🍟'
            />
            
        </>

        
    );

}

export default Home;