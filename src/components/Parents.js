import React from 'react';
import Child from './Child';


const Parents = (props) => {
    return(
        <div>
            <Child joy={props.changeTheWordEvent} title={props.title} />
            <Child joy={props.keepTheWordSameEvent} title={props.title} />
        </div>
    )
}
export default Parents ;