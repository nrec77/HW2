import React, { useContext, useEffect } from 'react'
import { ListGroup, ListGroupItem, Button, Card, } from 'react-bootstrap'
import { useResource } from 'react-request-hook'
import { StateContext } from './Contexts'


function User({ username }) {
        <div>
            {username}
        </div>
}


export default React.memo(User);
