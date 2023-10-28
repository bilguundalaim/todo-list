// import React, { useState } from "react";
import React, { useRef } from "react";
import { AiOutlineClose } from "react-icons/ai";
import "./addlist.css";
import Plan from "../../assets/plan.png";

function AddList({ isVisible, onAddList }) {

    const containerRef = useRef(null);

    const style = {
        visibility: isVisible ? 'visible' : 'hidden'
    };

    const handleClose = () => {
        if (containerRef.current) {
            containerRef.current.style.visibility = 'hidden';
        }
    };

    // const val = useRef("");

    const inputValue = useRef(null);

    const handleAddlist = () => {
        if (inputValue.current) {
            onAddList(inputValue.current.value);
            inputValue.current.value = '';
        }
    };
    
    return (
        <div className="addlist-container" style={style} ref={containerRef}>
            <div className="popup">
                <div className="top">.<AiOutlineClose className="close-icon" onClick={handleClose} size={20}/></div>
                <div className="cute">
                    <img src={Plan} alt='list Logo'/>
                    <div>
                        <input ref={inputValue} type="text" placeholder="List Name"/>
                        <p onClick={handleAddlist}>Add List</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddList