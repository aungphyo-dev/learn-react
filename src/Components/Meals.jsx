import axios from "axios";
import {useEffect, useState} from "react";
import Card from "./Card.jsx";
import Loading from "./Loading.jsx";
const Meals = ()=>{
    const [meals,setMeals] = useState();
    const [isLoading,setIfLoading] = useState(true);
    const getMeals = async ()=>{
        const {data} = await axios.get('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood');
        setMeals(data.meals);
        setIfLoading(false)
    };
    useEffect(()=> {
        getMeals()
    },[])
    return (
       <>
           {isLoading ? <Loading/>:(
               <div className='flex gap-5 flex-wrap'>
                   {meals?.map((meal)=><Card key={meal.idMeal} meal={meal}/>)}
               </div>
           )}
       </>
    )
}

export default Meals