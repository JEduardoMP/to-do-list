import { NavLink } from "react-router-dom";

const NavBar = () => {

    return(
        <div className="flex justify-between aling-center w-10/12 mx-auto text-white mt-5" >
            <NavLink exact to="/" activeClassName="text-yellow">Tasks</NavLink>
            <NavLink exact to="/complete" activeClassName="text-yellow">Complete</NavLink>
            <NavLink exact to="/incomplete" activeClassName="text-yellow">Incomplete</NavLink>
            <NavLink exact to="/deletes" activeClassName="text-yellow">Trash</NavLink>
        </div>
    )
}
export default NavBar;