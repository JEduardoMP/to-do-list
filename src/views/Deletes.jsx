import { useContext } from "react";
import NavBar from "../component/NavBar";
import ToDoContext from "../Context/ToDoContext";

const Deletes = () => {

    const {state, dispatch} = useContext(ToDoContext);

    return(
        <div className="boder border-solid h-5/6 box-border">
            <NavBar />
            <div className="flex justify-between aling-center h-2/4 w-10/12 mx-auto text-white mt-12 mb-12">
                    <ul className="w-full p-4 min-h-2 border-2 rounded border-white overflow-y-auto">
                    {state.deletes.map( element => (
                        <li className="mb-2 flex aling-center justify-between">
                            <span key={element.id}>{element.Todo}</span>
                            <div>
                            <button className="mr-2 bg-blue p-2" onClick={() => dispatch({type: 'RESTORE', payload: 
                                {
                                    ...state,
                                    task: {id: element.id, Todo: element.Todo, complete: false},
                                    deletes: {id: element.id, Todo: element.Todo}
                                }
                                })}>Restore</button>
                            <button className="mr-2 bg-red p-2" onClick={() => dispatch({type: 'DELETE', payload: 
                                {
                                    ...state,
                                    deletes: {id: element.id, Todo: element.Todo}
                                }
                                })}>Delete</button>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Deletes;