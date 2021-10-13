import { createContext, useReducer } from "react";

const ToDoContext = createContext();

const initialState = {
    task: [],
    deletes: []
}

const reducer = (state, action) =>{
    switch(action.type) {
        case 'ADD':
            if(action.payload.task.Todo === '' || state.task.some(element =>  element.Todo === action.payload.task.Todo)){
                console.log('Error')
                return{
                    ...state
                }
            }else{
                // console.log(action.payload.task)
                return{
                    ...state,
                    task: [...state.task, action.payload.task]
                }
            }
        case 'TRASH':
            // console.log(action);
            return{
                ...state,
                task: state.task.filter(task => task.id !== action.payload.task.id),
                deletes: [...state.deletes, action.payload.deletes]
            }
        case 'RESTORE':
            return{
                ...state,
                task: [...state.task, action.payload.task],
                deletes: state.deletes.filter(task => task.id !== action.payload.deletes.id)
            }
        case 'DELETE':
            return{
                ...state,
                deletes: state.deletes.filter(task => task.id !== action.payload.deletes.id)
            }
        default: 
            return state
    }
}

const ToDoContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const data = {state, dispatch};

    // console.log(state)
    
    return(
    <ToDoContext.Provider value={data}>
        {children}
    </ToDoContext.Provider>
    )
}

export default ToDoContext;
export { ToDoContextProvider };