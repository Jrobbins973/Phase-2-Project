import React from "react";
import {Header, Table} from 'semantic-ui-react'

function TrackerTable(props){
    const {trackedExercise} = props

    return ( <Table celled padded>
        {/* <Table.Header>
            <Table.Row>
            <Table.HeaderCell singleLine>Exercise</Table.HeaderCell>
            <Table.HeaderCell>Date</Table.HeaderCell>
            <Table.HeaderCell>Comments</Table.HeaderCell>
            </Table.Row>
        </Table.Header> */}
    
        <Table.Body>
            <Table.Row>
            <Table.Cell>
                <Header as='h2' textAlign='center'>
                {trackedExercise.name}
                </Header>
            </Table.Cell>

            {/* date */}
            <Table.Cell singleLine>{trackedExercise.date}</Table.Cell>

            {/*comments*/}
            <Table.Cell>{trackedExercise.comment}</Table.Cell>
            </Table.Row>
        </Table.Body>
        </Table>)
}

export default TrackerTable