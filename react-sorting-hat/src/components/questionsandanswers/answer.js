import React from 'react'

const Answer = props => {
    return (
        <div className='answer' onClick={() => props.click(props.value)}>
            <h2>{props.answer}</h2>
        </div>
    )
}

export default Answer 