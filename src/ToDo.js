import React, { useContext, useEffect } from 'react'
import { ListGroup, ListGroupItem, Button, Card, } from 'react-bootstrap'
import { useResource } from 'react-request-hook'
import { StateContext } from './Contexts'

function ToDo({ title, description, dateCreated, complete, dateCompleted, todoId, short = false }) {


  const { dispatch } = useContext(StateContext)
  const { state } = useContext(StateContext)
  
  const [todo_delete, deleteTodo] = useResource((title, description) => ({
    url: `/todo/delete`,
    method: 'delete',
    headers: {"Authorization": `${state.user.access_token}`},
    data: {title, description}
  }))

  const [todo_toggle, toggleTodo] = useResource((title, description, completed) => ({
    url: `/todo/toggle`,
    method: 'patch',
    headers: {"Authorization": `${state.user.access_token}`},
    data: {
      title,
      description,
      completed,
      dateCompleted: Date.now()
    }
  }))
  
  useEffect(() => {
    if (todo_delete && todo_delete.data && todo_delete.isLoading === false) {
      dispatch({ type: 'DELETE_TODO', todoId: todoId })
    }
  }, [todo_delete])

  useEffect(() => {
    if (todo_toggle && todo_toggle.data && todo_toggle.isLoading === false) {
      dispatch({ type: 'TOGGLE_TODO', complete: todo_toggle.data.complete, dateCompleted: todo_toggle.data.dateCompleted, todoId })
    }
  }, [todo_toggle])



  let processedContent = description

  if (short) {
    if (description.length > 30) {
      processedContent = description.substring(0, 30) + '...'
    }
  }

  return (
    <>
      <Card >
        <Card.Header>
          <h4><b>{title}</b></h4>
        </Card.Header>
        <Card.Body>
          <Card.Text>{processedContent}<br /></Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem>Date Created : {dateCreated}</ListGroupItem>
          <ListGroupItem>
            Completed <input type='checkbox' checked={complete} onChange={e => { toggleTodo(title, description, e.target.checked) }}></input>
            {complete && <><i> : {new Date().toLocaleDateString('en-us')}</i></>}
          </ListGroupItem>
        </ListGroup>
        <Card.Body>
          <Button variant="primary" onClick={(e) => { deleteTodo(title, description) }}>Delete Post</Button>
        </Card.Body>
      </Card>
      <br />
    </>
  )
}

export default React.memo(ToDo);
