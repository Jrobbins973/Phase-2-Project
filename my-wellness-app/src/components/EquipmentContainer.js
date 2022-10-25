import React from "react";
import EquipmentCard from "./EquipmentCard";

function EquipmentContainer(props) {

    const {equipmentData} = props

    const renderEquipment = equipmentData.map(equipment => 
    <EquipmentCard 
    key={equipment.id}
    equipment={equipment}/>   )


    return <div>

{renderEquipment}
    </div>
}

export default EquipmentContainer