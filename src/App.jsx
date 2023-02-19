import './index.css'
import {Routes, Route} from "react-router-dom";
import Meals from "./Components/Meals.jsx";
import Details from "./Components/Details.jsx";
import Error from "./Components/Error.jsx";
import Nav from "./Components/Nav.jsx";
const App = () => {
    return (
        <div className='container mx-auto'>
                <Nav/>
                <Routes>
                    <Route path='/' element={<Meals/>}/>
                    <Route path='/details/:id' element={<Details/>}/>
                    <Route path='*' element={<Error/>}/>
                </Routes>
        </div>
    )
}

export default App