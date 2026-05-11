import React from 'react'

function EvenHandler() {
    const handleClick = () => {
        alert("I am Clicked");
    }
    function handleMouseOver() {
        alert("u are hovering on para");
    }
    function handleChange(e) {
        console.log("we have change the value in input", e.target.value);

    }
    function handleSubmit(e) {
        e.preventDefault();
        // i am writing my custom behaviour here 
        alert("the form is going to submit");
    }
    return (

        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type='text'
                    onChange={handleChange} />
                <button
                    type='submit'>Submit</button>
            </form>
            <p
                onMouseOver={handleMouseOver}>
                I am para
            </p>
            <button onClick={handleClick}>
                Click Me
            </button>
        </div>
    )
}

export default EvenHandler