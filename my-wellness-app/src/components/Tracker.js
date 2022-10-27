import React, {useState} from "react";
import { Button, Checkbox, Form, Header, Table } from 'semantic-ui-react'
import TrackerTable from "./TrackerTable";

function Tracker(props){
    const{addNewTrackedExercise, deleteTrackedExercise} = props
    
    const [exercise, setExercise] = useState("")
    const [date, setDate] = useState("")
    const [comment, setComment] = useState("")

    function exerciseChange(e){
        setExercise(e.target.value)
    }
    function dateChange(e){
        setDate(e.target.value)
    }

    function commentChange(e){
        setComment(e.target.value)
    }
    
function handleSubmit(e){
    e.preventDefault()
    const newlyTrackedData = {
        name:exercise,
        date:date,
        comment:comment
    }
    addNewTrackedExercise(newlyTrackedData)

}
    
    const{trackedData} = props
    const renderTrackedTable = trackedData.map(trackedExercise => 
    
    <TrackerTable 
    key={trackedExercise.id}
    trackedExercise={trackedExercise}
    deleteTrackedExercise={deleteTrackedExercise}
    />)

    return ( 
<div>
    <h2>Track your progress!</h2>

    
    <Form onSubmit={handleSubmit}>
        <Form.Field>
            <label>Exercise</label>
            <input 
            type="text"
            placeholder='Exercise Name Here'
            value={exercise}
            onChange={exerciseChange}
            />
        </Form.Field>
        <Form.Field>
            <label>Date</label>
            <input type="date"
            value={date}
            onChange={dateChange} />
        </Form.Field>
        <Form.Field>
            <label>Comments</label>
            <input 
            type="text" 
            placeholder='How did it go?'
            value={comment}
            onChange={commentChange} />
        </Form.Field>
    
        <Button 
        type='submit'

        >Submit</Button>
        </Form>
        <br></br>
        <br></br>
        
        <table className="ui celled striped padded table">
        <tbody>
            <tr>
            <th>
                <h3 className="ui center aligned header">Exercise</h3>
            </th>
            <th>
                <h3 className="ui center aligned header">Date</h3>
            </th>
            <th>
                <h3 className="ui center aligned header">Comment</h3>
            </th>
            </tr>
        {renderTrackedTable}
        </tbody>
        </table>


</div>)
}

export default Tracker