import React, {useState, useEffect} from "react";  
import ExerciseContainer from "./ExerciseContainer";
import EquipmentContainer from "./EquipmentContainer";
import Home from "./Home";
import VideoContainer from "./VideoContainer";
import { Input, Menu} from 'semantic-ui-react'
import {Switch, Route, Link, NavLink} from 'react-router-dom'

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

function handleChange (e){
    console.log(e.target.change)
}

return (
    <div>
    
    <Menu pointing>
        <Link to="/">
            <Menu.Item name='Home'/>
        </Link>

        <Link to="/exercise-list">
        <Menu.Item name='Exercises'/>
        </Link>

        <Link to="/equipment-list">
        <Menu.Item name='Equipment'/>
        </Link>

        <Link to="/videos">
        <Menu.Item name='Videos'/>
        </Link>
        
        <Menu.Menu position='right'>
            <Menu.Item>
            <Input onChange={handleChange} icon='search' placeholder='Where is your pain?' />
            </Menu.Item>
        </Menu.Menu>
        </Menu>
        
        
<Switch>
    <Route exact path="/">
            <Home/>
    </Route> 
</Switch>

    <Switch>
        <Route path="/exercise-list">     
            <ExerciseContainer exerciseData = {exerciseData} />
        </Route> 
    </Switch>  

    <Switch>
        <Route path="/equipment-list">
            <EquipmentContainer equipmentData = {equipmentData} />
        </Route>
    </Switch> 

    <Switch>
        <Route path="/videos">
            <VideoContainer />
        </Route>
    </Switch>  
{/* </Switch> */}
</div>
)


}

export default NavBar