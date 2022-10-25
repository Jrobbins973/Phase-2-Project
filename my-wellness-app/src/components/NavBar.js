import React, {useState, useEffect} from "react";  
import ExerciseContainer from "./ExerciseContainer";
import EquipmentContainer from "./EquipmentContainer";
import { Input, Menu, Segment } from 'semantic-ui-react'

const exerciseUrl = 'http://localhost:3000/exercises'
const equipmentUrl = 'http://localhost:3000/equipment'


function NavBar (props){

const [exerciseData, setExerciseData] = useState([])
const [equipmentData, setEquipmentData] = useState([])

useEffect(() => {
    fetch(exerciseUrl)
    .then(res => res.json())
    .then(setExerciseData)
},[])

useEffect(() => {
    fetch(equipmentUrl)
    .then(res => res.json())
    .then(setEquipmentData)
},[])

return (
    <>
    <Menu pointing>
        <Menu.Item
            name='Home'
            // active={activeItem === 'home'}
            // onClick={this.handleItemClick}
        />
        <Menu.Item
            name='Exercises'
            // active={activeItem === 'messages'}
            // onClick={this.handleItemClick}
        />
        <Menu.Item
            name='Equipment'
            // active={activeItem === 'friends'}
            // onClick={this.handleItemClick}
        />
        <Menu.Menu position='right'>
            <Menu.Item>
            <Input icon='search' placeholder='Where is your pain?' />
            </Menu.Item>
        </Menu.Menu>
        </Menu>

    {/* <div class="ui pointing menu">
    <a class="item active">
    Home
    </a>
    <a class="item">
    Exercises
    </a>
    <a class="item">
    Equipment
    </a>
    <div class="right menu">
    <div class="item">
        <div class="ui transparent icon input">
        <input type="text" placeholder="Search..."/>
        <i class="search link icon"></i>
        </div>
    </div>
    </div>
</div>
<div class="ui segment">
    <p></p>
    
</div> */}
{/* These render the cards */}
<ExerciseContainer exerciseData = {exerciseData} />
<EquipmentContainer equipmentData = {equipmentData} />

</>
)


}

export default NavBar