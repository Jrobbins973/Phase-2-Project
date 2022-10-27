import React from "react";

function EquipmentSearch(props){
    const {handleEquipmentSearch} = props
    return <input onChange={handleEquipmentSearch} className ="search" type="text" placeholder="What are you looking for?"></input>
}

export default EquipmentSearch