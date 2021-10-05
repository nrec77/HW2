import UserBar from './User/UserBar'
import CreateToDo from './CreateToDo'

function App() {
  return (
      <div>
        <UserBar />
        <br></br><br></br>
        <CreateToDo user="Paul"/>
        </div>
  )
    
  
}
export default App;