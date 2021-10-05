import React from 'react'

export default function ToDo ({ title, description, dateCreated, complete, dateCompleted}) {
  return (
       <div>
          <h3>{title}</h3>
          <div>{description}</div>
          <br />
          <div>Date Created {dateCreated} </div>
          <div>Complete = {complete} </div>
          <div>Date Completed {dateCompleted} </div>
      </div> 
 )
}