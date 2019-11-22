import React from 'react';
import './Index.css';

const Category = () => {
    return(
        <>
        <div className="grid-container">
            <div className="grid-item">
                <span>A</span>
            </div>
            <div className="grid-item">
                <span>B</span>
            </div>
            <div className="grid-item">
                <span>C</span>
            </div>
            <div className="grid-item">
                <span>D</span>
            </div>
            <div className="grid-item">
                <span>E</span>
            </div>
            <div className="grid-item">
                <span>F</span>
            </div>
            <div className="grid-item">
                <span>G</span>
            </div>
            <div className="grid-item">
                <span>H</span>
            </div>
            <div className="grid-item">
                <span>I</span>
            </div>
            <div className="grid-item">
                <span>J</span>
            </div>
            <div className="grid-item">
                <span>K</span>
            </div>
            <div className="grid-item">
                <span>L</span>
            </div>
            
        </div>

        <div className="text-center">

        <label className="label-notes">Notes</label>
        <input type="textarea" className="notes" />
        </div>
        </>
    );
}

export default Category;
