import React, {useState, useEffect} from "react";  
import ExerciseContainer from "./ExerciseContainer";
import EquipmentContainer from "./EquipmentContainer";
import Home from "./Home";
import { Menu, Icon, Image, Button, Input } from 'semantic-ui-react'
import {Link, Switch, Route} from 'react-router-dom'
import VideoContainer from "./VideoContainer";
import ExerciseSearch from "./ExerciseSearch";
import EquipmentSearch from "./EquipmentSearch";
import Tracker from "./Tracker";


const exerciseUrl = 'http://localhost:3000/exercises'
const equipmentUrl = 'http://localhost:3000/equipment'
const trackerUrl = 'http://localhost:3000/tracker'

function NavBar (props){
const [exerciseData, setExerciseData] = useState([])
const [equipmentData, setEquipmentData] = useState([])
const [trackedData, setTrackedData] = useState([])
const [darkMode, setDarkMode] = useState(false)

//fetches exercise data
useEffect(() => {
    fetch(exerciseUrl)
    .then(res => res.json())
    .then(setExerciseData)
},[])
//fetches equipment dataset
useEffect(() => {
    fetch(equipmentUrl)
    .then(res => res.json())
    .then(setEquipmentData)
},[])

//fetches tracked data
useEffect(() => {
    fetch(trackerUrl)
    .then(res => res.json())
    .then(setTrackedData)
},[])

// POST for new tracked exercises
const addNewTrackedExercise = (newTrackedExercise)=>{
    let postRequest = {
        method:"POST",
        headers: {
            'Content-type': "application/json",
            'Accept': "application/json"
        },
        body:JSON.stringify(newTrackedExercise)
    }
    fetch(trackerUrl, postRequest)
    .then(res => res.json())
    .then(newlyTrackedData => setTrackedData([...trackedData, newlyTrackedData]))
}

//this accesses the css for body, and toggles dark mode
const body = document.getElementsByTagName('body')[0]

function darkModeToggle(){
    setDarkMode(!darkMode)
}
body.style.backgroundColor = darkMode ? "grey" : "white"


// search bar functionality for exercise
const [exerciseSearch, setExerciseSearch] = useState("")
const handleExerciseSearch = (e) => {
    setExerciseSearch(e.target.value)
}
// filtered data that gets passed down to the cards, allowing for search to work
const filterExercises = 
exerciseData.filter(exercise =>  exercise.category.toLowerCase().includes(exerciseSearch.toLowerCase()))

// search bar functionality for equipments
const [equipmentSearch, setEquipmentSearch] = useState("")
const handleEquipmentSearch = (e) => {
    setEquipmentSearch(e.target.value)
}
//filter variable for equipment
const filterEquipment = 
equipmentData.filter(equipment => equipment.item_description.toLowerCase().includes(equipmentSearch.toLowerCase()))


return (
    <div className="App">
    
    <Menu pointing>
        <Button onClick={darkModeToggle}  animated>
            <Button.Content visible>Dark Mode</Button.Content>
            <Button.Content hidden>
                <Icon name='moon' />
            </Button.Content>
        </Button>
        <Link to="/">
            <Menu.Item name='Home'/>
        </Link>

        <Link to="/exercise-list">
        <Menu.Item name='Exercises'/>
        </Link>

        <Link to="/equipment-list">
        <Menu.Item name='Equipment'/>
        </Link>

        <Link to="/tracker">
        <Menu.Item name='Tracker'/>
        </Link>

        {/* <Link to="/videos">
        <Menu.Item name='Videos'/>
        </Link> */}

        {/* this search bar is currently not in use */}

        {/* <Menu.Menu position='right'>
            <Menu.Item>
            <Input icon='search' placeholder='Where is your pain?' />
            </Menu.Item>
        </Menu.Menu> */}
        </Menu>
        
        
<Switch>
    <Route exact path="/">
            <Home/>
    </Route> 
</Switch>

    <Switch>
        <Route path="/exercise-list">
            <ExerciseSearch handleExerciseSearch={handleExerciseSearch}/> 
            <br></br> 
            <br></br> 
            
            <ExerciseContainer 
            filterExercises = {filterExercises} 
            />
        </Route> 
    </Switch>  

    <Switch>
        <Route path="/equipment-list">
            <EquipmentSearch handleEquipmentSearch={handleEquipmentSearch}/>
            <br></br>
            <br></br>
            <EquipmentContainer filterEquipment = {filterEquipment} />
        </Route>
    </Switch> 

    <Switch>
        <Route path="/tracker">
            <Tracker  trackedData={trackedData} addNewTrackedExercise={addNewTrackedExercise}/>
        </Route>
    </Switch>  
{/* </Switch> */}
</div>
)


}

export default NavBar