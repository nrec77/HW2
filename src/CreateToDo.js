import React from 'react'

export default function CreateToDo () {
     return (
          <form onSubmit={e => e.preventDefault()}>
             
            <div>
                <label htmlFor="create-title">Title : </label>
                <input type="text" name="create-title" id="create-title" required="required" />
                <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                <label htmlFor="create=description">Description : </label>
                <input type="text" name="create-description" id="create-todo" />
            </div>
        
            <input type="submit" value="Create" />
            
         </form>   
          )
 }
 