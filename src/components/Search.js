import React from "react";

export function Search({handleInputChange, handleSubmit}) {
    return(
        <>
        <input type="text" onChange={handleInputChange} />
        <button className="btn" type="button" onClick={handleSubmit}>Search</button>
        </>
    )
}