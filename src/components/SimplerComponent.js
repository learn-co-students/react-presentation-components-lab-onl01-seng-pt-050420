// Code SimplerComponent Here 

// SimplerComponent = ({handleClick}) => {
//     return <div onClick={handleClick}> I am just happy </div>
// } 

// export default SimplerComponent;

import React from 'react'

function SimplerComponent({handleClick}) {
    return (
        <div onClick={handleClick}> I am just happy </div>
       
    )
}

export default SimplerComponent
