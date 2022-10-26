import React from "react";
import EquipmentCard from "./EquipmentCard";
import {Grid} from 'semantic-ui-react'

function EquipmentContainer(props) {

    const {equipmentData} = props

    const renderEquipment = equipmentData.map(equipment => 
    <EquipmentCard 
    key={equipment.id}
    equipment={equipment}/>   )


return <div className="ui grid container">

    {renderEquipment}

    </div>
}

export default EquipmentContainer