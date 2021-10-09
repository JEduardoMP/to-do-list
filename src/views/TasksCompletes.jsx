import { useContext } from "react";
import NavBar from "../component/NavBar";
import ToDoContext from "../Context/ToDoContext";

const TasksCompletes = () => {

    const {state} = useContext(ToDoContext);

    const completeTask = state.task.filter(element => element.complete === true)
    // console.log(completeTask)

    return(
        <div className="boder border-solid h-5/6">
            <NavBar/>
            <div className="flex justify-between aling-center h-2/4 w-10/12 mx-auto text-white mt-12 mb-12">
                <ul className="w-full p-4 min-h-2 border-2 rounded border-white overflow-y-auto">
                    {completeTask.map(element => (
                        <li>
                            <input type="checkbox" className="mr-2" checked="enable" />
                            <span key={element.id}>{element.Todo}</span>
                        </li>
                ))}
                </ul>
            </div>
        </ div>
    )
}

export default TasksCompletes;