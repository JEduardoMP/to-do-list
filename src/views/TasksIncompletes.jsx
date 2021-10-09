import { useContext } from "react";
import NavBar from "../component/NavBar";
import ToDoContext from "../Context/ToDoContext";

const TasksIncompletes = () => {

    const {state} = useContext(ToDoContext);

    const incompleteTasks = state.task.filter( element => element.complete === false);

    return(
        <div className="boder border-solid h-5/6">
            <NavBar />
            <div className="flex justify-between aling-center h-2/4 w-10/12 mx-auto text-white mt-12 mb-12">
                    <ul className="w-full p-4 min-h-2 border-2 rounded border-white overflow-y-auto">
                    {incompleteTasks.map( element => (
                        <li>
                            <input type="checkbox" className="mr-2" onChange={e => element.complete = e.target.checked} />
                            <span key={element.id}>{element.Todo}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default TasksIncompletes;