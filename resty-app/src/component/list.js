import React from 'react';

export default props=> {
    return(
       <>
           <h3>My History List</h3>
           <ul className='history-class'>
               {props.children}
           </ul>
       </>
    )
}