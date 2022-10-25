import React from "react";
import { Card, Icon, Image, Button} from 'semantic-ui-react'

function EquipmentCard(props){
    
    
    const {equipment} = props


    return ( <Card class="ui centered card" >
        <Image src={equipment.item_image} wrapped ui={false} />
        <Card.Content>
        <Card.Header>{equipment.item_name}</Card.Header>
        {/* <Card.Meta>
            <span className='date'>{`$${equipment.price}`}</span>
        </Card.Meta> */}
        <Card.Description>
            {equipment.item_description}
        </Card.Description>
        </Card.Content>
        <Card.Content extra>
    <Button animated='fade'>
        <Button.Content visible>{`$${equipment.price}`}</Button.Content>
        <Button.Content hidden><a href={equipment.item_link}>Buy Now!</a></Button.Content>
    </Button>
        </Card.Content>
    </Card>)
}

export default EquipmentCard