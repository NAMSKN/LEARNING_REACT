import React from 'react'
import Person from './Person'

function PersonList() {
    const persons = [
        {
            id: 1, 
            name: 'Namratha', 
            age: 22,
            position: 'Princess'
        }, 
        {
            id: 2, 
            name: 'Krishna', 
            age: 29,
            position: 'Prince'
        }, 
        {
            id: 3, 
            name: 'Balarama', 
            age: 30,
            position: 'Prince'
        }
    ]
    const personList = persons.map(person => <Person key= {person.id} person = {person}/>)
  return (
    <div>{personList}</div>
  )
}

export default PersonList