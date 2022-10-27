import React from "react";
import { Button, Checkbox, Form } from 'semantic-ui-react'
import TrackerForm from "./TrackerForm";

function Tracker(props){
    return ( 
<div>
    <h2>Track your progress!</h2>

    
    <Form>
        <Form.Field>
            <label>Exercise</label>
            <input placeholder='Exercise Name Here' />
        </Form.Field>
        <Form.Field>
            <label>Date</label>
            <input type="date" />
        </Form.Field>
        <Form.Field>
            <label>Comments</label>
            <input type="text" placeholder='How did it go?' />
        </Form.Field>
    
        <Button type='submit'>Submit</Button>
        </Form>
        <br></br>
        <br></br>
        
        
        

        <TrackerForm />


</div>)
}

export default Tracker