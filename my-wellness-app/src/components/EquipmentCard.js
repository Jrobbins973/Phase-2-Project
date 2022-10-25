import React, {useState} from "react";
import { Card, Icon, Image, Button} from 'semantic-ui-react'

function EquipmentCard(props){
    
    const [save, setSave] = useState(false)
    
    const {equipment} = props

    const handleClick = () => {
        setSave(!save)
    }

    return  <Card className="ui centered card">
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


    <Button  animated='fade'>
        <Button.Content visible>{`$${equipment.price}`}</Button.Content>
        <Button.Content hidden><a href={equipment.item_link} target="_blank">Buy Now!</a></Button.Content>
    </Button>


    <Button  animated='vertical'>
    <Button.Content hidden>Save</Button.Content>
        <Button.Content visible>
        <Icon name='check' />
        </Button.Content>
    </Button>


    
        </Card.Content>
    </Card>
    
}

export default EquipmentCard