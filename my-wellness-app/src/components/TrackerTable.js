import React from "react";
import {Header, Table, Container} from 'semantic-ui-react'

function TrackerTable(props){
    const {trackedExercise} = props


    return ( 
        
        <tr>
            
        <td>{trackedExercise.name}</td>
        <td>{trackedExercise.date}</td>
        <td>{trackedExercise.comment}</td>
        
        </tr>
    )



    // return ( <Table celled padded>
    //     <Table.Header>
    //         <Table.Row>
    //         <Table.HeaderCell singleLine>Exercise</Table.HeaderCell>
    //         <Table.HeaderCell>Date</Table.HeaderCell>
    //         <Table.HeaderCell>Comments</Table.HeaderCell>
    //         </Table.Row>
    //     </Table.Header>
    
    //     <Table.Body>
    //         <Table.Row>
    //         <Table.Cell textAlign='center'>
    //             {trackedExercise.name}
                
    //         </Table.Cell>

    //         {/* date */}
    //         <Table.Cell textAlign='center'>{trackedExercise.date}</Table.Cell>

    //         {/*comments*/}
    //         <Table.Cell textAlign='center'>{trackedExercise.comment}</Table.Cell>
    //         </Table.Row>
    //     </Table.Body>
    //     </Table>)
}

export default TrackerTable