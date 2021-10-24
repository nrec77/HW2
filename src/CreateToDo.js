import React, {useState, useContext, useEffect} from 'react'
import { StateContext } from './Contexts'
import { useResource } from 'react-request-hook'


export default function CreateToDo () {
 
    const {state, dispatch} = useContext(StateContext)
    const {user} = state

    const [todo , createTodo ] = useResource(({ title, description, dateCreated, complete, dateCompleted }) => ({
        url: '/todos',
        method: 'post',
        data: { title, description, dateCreated, complete, dateCompleted }
    }))

    const [ title, setTitle ] = useState('')
    const [ description, setDescription ] = useState('')
    const [ dateCreated, setDateCreated ] = useState('')
    const [ complete ] = useState(false)
    const [ dateCompleted ] = useState('')
    
    function handleTitle (evt) { setTitle(evt.target.value) }

    function handleDescription (evt) { setDescription(evt.target.value) }

    function handleDateCreated () { setDateCreated(new Date().toLocaleDateString('en-us'))}

    function handleCreate () {
        createTodo({ title, description, dateCreated, complete, dateCompleted })
    }

    useEffect(() => {
        if (todo && todo.isLoading === false && todo.data) {
            dispatch({ type: 'CREATE_TODO', title: todo.data.title, description: todo.data.description, dateCreated: todo.data.dateCreated, 
                                            complete: todo.data.complete, dateCompleted: todo.data.dateCompleted, id: todo.data.id })
            console.log(todo.data)
        }
    }, [todo])

     return (
         
        <form name="form" onSubmit={e => {e.preventDefault(); handleCreate();} }>
            
            <br/><div>Author: <b>{user}</b></div>

            <div>
                <label htmlFor="create-title">Title : </label>
                <input type="text" value={title} onChange={handleTitle} name="create-title"  id="create-title" required="required" />

                <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                <label htmlFor="create=description">Description : </label>
                <input type="text" value={description} onChange={handleDescription} name="create-description"  id="create-description" />
            </div>

            <input type="submit" value="Create" onClick={handleDateCreated} />
            <br/><br/><hr/>
         </form>   
          )
 }
 