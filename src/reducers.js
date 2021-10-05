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
        case 'CREATE_TODO':
          const newToDo = { 
              title: action.title,
              description: action.description, 
              dateCreated: action.dateCreated,
              complete: action.complete,
              dateCompelted: action.dateCompelted
            }
            return [ newToDo, ...state ]
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
