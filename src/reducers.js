function userReducer (state, action) {
    switch (action.type) {

        case 'LOGIN':

        case 'REGISTER':
            return action.username

        case 'LOGOUT':
            return ''

        default:
            return state;
    }
}

  function todoReducer (state, action) {
    switch (action.type) {

        case 'FETCH_TODOS':
            return action.todos

        case 'CREATE_TODO':
          const newToDo = { 
              title: action.title,
              description: action.description, 
              dateCreated: action.dateCreated,
              complete: false,
              dateCompelted: undefined,
              id: action.id
            }
            return [ newToDo, ...state ]

        case 'TOGGLE_TODO':
            return state.map((p, i) => {
                if(i === action.todoId) {
                    p.complete = action.complete;
                    p.dateCompleted = new Date().toLocaleDateString('en-us');
                    console.log(p)
                }
                return p;
            })

        case 'DELETE_TODO':
            return state.filter((p, i) => i !== action.todoId)

        default:
           return state;
    }
  }

  export default function appReducer (state, action) {
    return {
        user: userReducer(state.user, action),
        todos: todoReducer(state.todos, action)
    }
}
