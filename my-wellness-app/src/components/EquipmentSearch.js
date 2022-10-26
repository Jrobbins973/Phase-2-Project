import React from "react";

function EquipmentSearch(props){
    const {handleEquipmentSearch} = props
    return <input onChange={handleEquipmentSearch} className ="search" type="text" placeholder="🏋🏻LETS GET FIT🏋🏻"></input>
}

export default EquipmentSearch