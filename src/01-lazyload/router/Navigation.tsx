import { Link } from "react-router-dom";
import { Routes, Route, Navigate } from "react-router-dom";
import { LazyPage1, LazyPage2 } from "../pages";
import LazyPage3 from '../pages/LazyPage3';


export const Navigation = () => {

    return (
        <>
            <h2>LayoutPages</h2>   

            <ul>
                <li>
                    <Link to="lazy1">LazyPage 1</Link>
                </li>
                <li>
                    <Link to="lazy2">LazyPage 2</Link>
                </li>
                <li>
                    <Link to="lazy3">LazyPage 3</Link>
                </li>
            </ul>

            <Routes>
                <Route path='lazy1' element={ <LazyPage1 /> } />
                <Route path='lazy2' element={ <LazyPage2 /> } />
                <Route path='lazy3' element={ <LazyPage3 /> } />

                <Route path="*" element={ <Navigate replace to={ 'lazy1 '} /> } />
            </Routes>

        </>
    )   
}
