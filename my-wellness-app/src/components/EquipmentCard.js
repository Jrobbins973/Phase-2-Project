import React from "react";

function EquipmentCard(props){
    const {equipment} = props


    return <div>
        <h1>{equipment.item_name}</h1>
    </div>
}

export default EquipmentCard