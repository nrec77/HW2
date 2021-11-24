import React, { useContext, useEffect } from 'react'
import { ListGroup, ListGroupItem, Button, Card, } from 'react-bootstrap'
import { useResource } from 'react-request-hook'
import { StateContext } from './Contexts'


function User({ username }) {
        <div>
            {username}
            <br />
        </div>
}


export default React.memo(User);
