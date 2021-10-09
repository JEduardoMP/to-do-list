import { useContext } from "react"
import NavBar from "../component/NavBar";
import ToDoContext from "../Context/ToDoContext"


const ToDoBox = () => {
    const {state, dispatch} = useContext(ToDoContext);
    // console.log(state.task)

    return(
        <div className="h-5/6">
            <NavBar />
                <div className="flex justify-between aling-center h-2/4 w-10/12 mx-auto text-white mt-12 mb-12">
                    <ul className="w-full p-4 min-h-2 border-2 rounded border-white overflow-y-auto">
                        {state.task.map(element => (
                            <li key={element.id} className="mb-2 flex justify-between w-full">
                                <div>
                                    <input type="checkbox"
                                        value={element.complete}
                                        onChange={e => element.complete = e.target.checked}/>
                                    <span className="mx-2">{element.Todo}</span>
                                </div>
                                <button className="mr-2 bg-trash p-2" onClick={() => dispatch({type: 'TRASH', payload: 
                                {
                                    ...state,
                                    task: {id:element.id, Todo: element.Todo},
                                    deletes: {id:element.id, Todo: element.Todo}
                                }
                                })}>Trash</button>
                            </li>
                        ))}
                    </ul>
                </div>
        </div>
    )
}

export default ToDoBox