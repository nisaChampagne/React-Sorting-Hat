import React from 'react';
import './results.css';

const Results = props => {
    return(
        <div className='results'>
            <h2 className='result'>{props.house}</h2>
        </div>
    )
}

export default Results;