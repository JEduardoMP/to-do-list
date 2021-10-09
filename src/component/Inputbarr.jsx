import { useContext, useState} from "react";
import ToDoContext from "../Context/ToDoContext";
import { v4 as uuidv4 } from "uuid";
const Inputbarr = () => {    

    const {state, dispatch} = useContext(ToDoContext);
    const [payload, setPayload] = useState('');
    
    const handleDispatch = () => {
        dispatch({type: 'ADD', payload: 
            {
                ...state,
                task: {id:uuidv4(), Todo: payload, complete: false}
            }
        })
        setPayload('')
    }

    return(
        <div className=" h-20 flex justify-center aling-center m-auto mt-2">
            <input className="h-10 m-auto mx-0 mr-1 p-2 border-white rounded md: w-2/4" 
            type='text' 
            placeholder='Add new task' 
            value={payload} onChange={(e) => setPayload(e.target.value)}/>
            <button className="p-2 h-2/4 my-auto bg-yellow rounded md: w-1/6" onClick={handleDispatch}>Send</button>
        </div>
    )
}

export default Inputbarr;