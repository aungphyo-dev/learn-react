import {MdAddShoppingCart} from  'react-icons/md'
import  {Link} from 'react-router-dom'
const Card = ({meal})=>{
    return (
        <div className='w-60 p-2 h-auto border overflow-hidden rounded-lg hover:scale-105 transition duration-500 shadow-lg hover:shadow-xl'>
            <img src={meal.strMealThumb} className='rounded-lg' alt="..."/>
            <p className='font-bold truncate py-2 text-gray-800 '>{meal.strMeal}</p>
            <div className="flex justify-between">
                <button className='flex justify-center items-center px-4 py-1.5  bg-blue-500 rounded-md text-white hover:bg-blue-900 transition duration-500'>Add to cart<MdAddShoppingCart className='ml-1'/></button>
                <Link to={`/details/${meal.idMeal}`}>
                    <button className='px-4 py-1.5 text-center text-black rounded-lg hover:bg-blue-400 transition duration-500  border'>Detail</button>
                </Link>
            </div>
        </div>
    )
}
export default Card