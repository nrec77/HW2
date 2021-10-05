import React, {useState} from 'react'


export default function CreateToDo ({user, dispatch}) {

    const [ title, setTitle ] = useState('')
    const [ description, setDescription ] = useState('')
    const [ dateCreated, setDateCreated ] = useState('')
    const [ complete, setComplete] = useState(false)
    const [ dateCompleted, setDateCompleted ] = useState('')


    function handleTitle (evt) { setTitle(evt.target.value) }

    function handleDescription (evt) { setDescription(evt.target.value) }




     return (
         
        <form name="formm" onSubmit={e => {e.preventDefault(); dispatch({type: "CREATE_TODO", title, description, dateCreated, complete, dateCompleted});} }>
            
             <div>Author: <b>{user}</b></div>

            <div>
                <label htmlFor="create-title">Title : </label>
                <input type="text" value={title} onChange={handleTitle} name="create-title"  id="create-title" required="required" />

                <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                <label htmlFor="create=description">Description : </label>
                <input type="text" value={description} onChange={handleDescription} name="create-description"  id="create-description" />
            </div>

            <input type="submit" value="Create" />
         </form>   
          )
 }
 
