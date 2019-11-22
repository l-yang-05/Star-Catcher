import React from 'react';
import './Index.css';

const RunForm = () => {


    return (
        <div>
            <form>
                
                <label htmlFor="run">Date</label>
                <input type="text" id="run"></input>
                <label htmlFor="run">Run Number</label>
                <input type="text" id="run"></input>
                <label htmlFor="run">Location</label>
                <input type="text" id="run"></input>
                <button type="submit">Add Run</button>
            </form>
        </div>
    )
}

export default RunForm;