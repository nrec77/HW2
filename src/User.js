import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-navi'


export default function User({ username, id }) {

    return (

        <>
        <Card >
          <Card.Header>
            <h4><b>{username}</b></h4>
          </Card.Header>
          <Card.Body>
            <Link href={`/users/${id}`}>{username}'s Todo's</Link>
          </Card.Body>
        </ Card>
        <br />
        </>
        
)}



