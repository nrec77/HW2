import React, { useEffect, useContext } from 'react'
import { StateContext } from '../Contexts'
import { useResource } from 'react-request-hook'
import { Link } from 'react-navi'
import ToDo from '../ToDo'


export default function TodoPage ({ id }) {

    const {state} = useContext(StateContext);

    const [ todo, getTodo ] = useResource(() => ({
        url: `/todo/${id}`,
        headers: {"Authorization": `${state.user.access_token}`},
        method: 'get'
    }))

    useEffect(getTodo, [id])

    return (
        <div>
            {(todo && todo.data)
                ? <ToDo {...todo.data} />
                : 'Loading...'
            }
            <div><Link href="/">Go Back</Link></div>
        </div>
    )
}
