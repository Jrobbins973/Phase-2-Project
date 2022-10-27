import React, {useState} from "react";
import { Button, Checkbox, Form, Header, Table } from 'semantic-ui-react'
import TrackerTable from "./TrackerTable";

function Tracker(props){
    const{addNewTrackedExercise} = props
    
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
        
        <Table celled padded>
        <Table.Header>
            <Table.Row>
            <Table.HeaderCell singleLine>Exercise</Table.HeaderCell>
            <Table.HeaderCell>Date</Table.HeaderCell>
            <Table.HeaderCell>Comments</Table.HeaderCell>
            </Table.Row>
        </Table.Header>
        </Table>
        {renderTrackedTable}


</div>)
}

export default Tracker