import React from 'react';
import './results.css';
// import Home from './../home-page/Home'

// import {NavLink} from 'react-router-dom'

const Results = props => {
    return(
        <div className='results'>
            <h2 className='result'>{props.house}</h2>
            {/* <NavLink to="/home" exact className="project_link" style={{color: 'white', textDecoration: 'none'}}><button>Replay</button></NavLink> */}
        </div>
    )
}

export default Results;