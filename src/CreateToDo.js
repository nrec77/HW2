import React, {useState, useContext, useEffect} from 'react'
import { useNavigation } from 'react-navi'
import { StateContext } from './Contexts'
import { useResource } from 'react-request-hook'


export default function CreateToDo () {
 
    const [ title, setTitle ] = useState('')
    const [ description, setDescription ] = useState('')
    const [ dateCreated, setDateCreated ] = useState('')
    const [ complete ] = useState(false)
    const [ dateCompleted ] = useState('')

    const navigation = useNavigation()

    const {state, dispatch} = useContext(StateContext)
    const {user} = state

    const [todo , createTodo ] = useResource(({ title, description, dateCreated, complete, dateCompleted }) => ({
        url: '/todo',
        method: 'post',
        headers: {"Authorization": `${state.user.access_token}`},
        data: { title, description, dateCreated, complete, dateCompleted }
    }))

    function handleTitle (evt) { setTitle(evt.target.value) }

    function handleDescription (evt) { setDescription(evt.target.value) }

    function handleDateCreated () { setDateCreated(new Date().toLocaleDateString('en-us'))}

    function handleCreate () {
        createTodo({ title, description, dateCreated, complete, dateCompleted })
    }

    useEffect(() => {
        if (todo && todo.data) {
            dispatch({ type: 'CREATE_TODO', title: todo.data.title, description: todo.data.description, dateCreated: todo.data.dateCreated, 
                                            complete: todo.data.complete, dateCompleted: todo.data.dateCompleted, id: todo.data._id })
            navigation.navigate(`/todo/${todo.data._id}`)

            console.log(todo.data)
        }
    }, [todo])

     return (
         
        <form name="form" onSubmit={e => {e.preventDefault(); handleCreate();} }>
            
            <div>Author: <b>{user.username}</b></div>
            <br />
            <div>
                <label htmlFor="create-title">Title : &nbsp;</label>
                <input type="text" value={title} onChange={handleTitle} name="create-title"  id="create-title" required="required" />

                <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                <label htmlFor="create=description">Description : &nbsp;</label>
                <input type="text" value={description} onChange={handleDescription} name="create-description"  id="create-description" />
            </div>
            <br />
            <input type="submit" value="Create" onClick={handleDateCreated} />
            <br/><hr/>
         </form>   
          )
 }
 