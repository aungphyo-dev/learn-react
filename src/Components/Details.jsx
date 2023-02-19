import {Link, useParams} from "react-router-dom";
import axios from "axios";
import {useEffect, useState} from "react";
import {IoLogoYoutube} from 'react-icons/io';
import {BsFillBookmarksFill} from 'react-icons/bs'
import Loading from "./Loading.jsx";

const Details = ()=>{
    const {id} = useParams();
    const [meal,setMeal] = useState({});
    const [isLoadig,SetisLoading] = useState(true)
    const SigleDetailGet = async ()=>{
        const {data} = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
        setMeal(data?.meals[0])
        SetisLoading(false)
    }
    useEffect(()=>{
        SigleDetailGet();
    },[])
    return (
        <>
            {isLoadig ? <Loading/> : (
                <div className='flex flex-wrap px-2 items-center justify-center'>
                    <img src={meal.strMealThumb} className='w-80  pb-2 rounded-lg' alt=""/>
                    <div className='py-2'>
                        <h1 className='text-2xl font-bold mb-3 bg-violet-400'>{meal.strMeal}</h1>
                        <p className='text-gray-600 mb-1.5 tracking-wide leading-7'>{meal.strInstructions}</p>
                        <div className='flex items-center flex-wrap gap-x-4 gap-y-2'>
                            {meal.strYoutube && <Link to={meal.strYoutube} target='_blank' className='bg-blue-300 py-2 px-3 rounded-lg '><IoLogoYoutube className='text-red-700 text-xl'/></Link>}
                            {meal.strCategory && <p className='flex items-center text-black bg-blue-300 py-2 px-3 rounded-lg '><BsFillBookmarksFill/>{meal.strCategory}</p>}
                            {meal.strArea && <p className='bg-blue-300 py-2 px-3 rounded-lg'>{meal.strArea}</p>}
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default Details