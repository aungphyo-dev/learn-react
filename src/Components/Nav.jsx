import {BiRestaurant} from 'react-icons/bi'
import {NavLink,Link} from "react-router-dom";
import Meals from "./Meals.jsx";
const Nav = ()=>{
    return (
        <div className='sticky top-0 w-full rounded flex justify-between items-center py-2 px-5 bg-cyan-300 my-4 z-50'>
            <Link to='/'>
                <div className='flex justify-center items-center'>
                    <BiRestaurant className='text-3xl text-gray-900'/>
                    <h1 className='text-xl font-bold'>Foodie</h1>
                </div>
            </Link>
            <div>
                <ul className='flex'>
                    <li className='px-4'>
                        <NavLink to='/'>Meals</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Nav