import React from "react";

const h1Loststyle = {
    textAlign : 'center',
    color : 'red'
}

const TrueOption = (props) => {
    let {xxx,yyy,zzz} = props;
    if((xxx === yyy) && (yyy === zzz))
    {
        return(
            <h1 style={{textAlign : 'center', color : 'green'}}>You Won!🎊✨🧤 because [{xxx}{yyy}{zzz}] all are matched</h1>

        )
    }
    else
    {
        return (
            <h1 style = {h1Loststyle}>You Lost ! 😌 because [{xxx} {yyy} {zzz}] didn't match </h1>
        )
    }

    
}


export default TrueOption;