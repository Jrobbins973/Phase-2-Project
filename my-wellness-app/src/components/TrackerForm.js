import React from "react";
import {Header, Table, Rating } from 'semantic-ui-react'

function TrackerForm(props){

    
    return ( <Table celled padded>
        <Table.Header>
            <Table.Row>
            <Table.HeaderCell singleLine>Exercise</Table.HeaderCell>
            <Table.HeaderCell>Date</Table.HeaderCell>
            <Table.HeaderCell>Comments</Table.HeaderCell>
            </Table.Row>
        </Table.Header>
    
        <Table.Body>
            <Table.Row>
            <Table.Cell>
                <Header as='h2' textAlign='center'>
                A
                </Header>
            </Table.Cell>
            <Table.Cell singleLine>Power Output</Table.Cell>
            <Table.Cell>
                Creatine supplementation is the reference compound for increasing
                muscular creatine levels; there is variability in this increase,
                however, with some nonresponders.
            </Table.Cell>
            </Table.Row>
            <Table.Row>
            <Table.Cell>
                <Header as='h2' textAlign='center'>
                A
                </Header>
            </Table.Cell>
            <Table.Cell singleLine>Weight</Table.Cell>
        
            <Table.Cell>
                Creatine is the reference compound for power improvement, with numbers
                from one meta-analysis to assess potency
            </Table.Cell>
            </Table.Row>
        </Table.Body>
        </Table>)
}

export default TrackerForm