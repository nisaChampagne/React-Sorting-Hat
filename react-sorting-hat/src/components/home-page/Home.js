import React from 'react';
import './home.css';

const Home = props => {
    return(
        <div className='home'>
            <img className='hogwarts-crest' src='https://www.freepnglogos.com/uploads/hogwarts-logo-png/hogwarts-logo-shadopro-deviantart-0.png' alt='hogwarts-crest'/>
            <h1>Hogwarts School of Witchcraft and Wizardry</h1>
            <h2>Which house do you belong to?</h2>
            <button className='play-btn'onClick={() => props.click('questions')}>Play!</button>
        </div>
    )
}
export default Home;