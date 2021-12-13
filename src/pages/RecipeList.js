import { useEffect, useState } from "react";
import Navbar from "../components/Navbar"
import "../styles/recipeList.css";
import { FaHeart, FaFontAwesomeFlag, FaLayerGroup, FaStar, FaExternalLinkSquareAlt} from 'react-icons/fa';
import { Link } from "react-router-dom";
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";

import Loader from '../components/Loader';

const RecipeList = () => {
    const [state, setState] = useState(false);
    const [data, setData] = useState(null);
    useEffect(()=>{
        fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=")
            .then(res=>{
/*                 console.log(res);
 */                return res.json();
            })
            .then((result)=>{
/*                 console.log(result.meals[0]);
 */                setData(result.meals);
                   setState(true);
            })
            .catch((e)=>{
                console.log(e);
            })
    }, [])


    return ( 
        <div className="recipeListContainer">
            <Navbar />
            <div className="container">
                
                {   !state ? <Loader /> : 
                    data.map((element)=>{
                        return (
                            <div className="item">
                                <div className="image">
                                    <img className="image" src={element.strMealThumb} alt="" />
                                </div>
                                
                                <table className="description">
                                    <tr>
                                        <td><FaStar /></td>
                                        <td>{element.strMeal}</td>
                                    </tr>
                                    <tr>
                                        <td><FaLayerGroup /></td>
                                        <td>{element.strCategory}</td>
                                    </tr>
                                    <tr>
                                        <td><FaFontAwesomeFlag /></td>
                                        <td>{element.strArea}</td>
                                    </tr>
                                </table>
                                
                                <a className="addWatchlist" href="#"><FaHeart id="heart" className="icon"/></a>
                                
                                    <Link className="goto" to={{
                                        pathname : '/recipe/'+element.idMeal,
                                        state: element
                                    }}>
                                        <FaExternalLinkSquareAlt className="gotoIcon"/>
                                    </Link>
                                
                            </div>
                                                    
                        )
                    })
                }
            
            </div>
        </div>
     );
}
 

export default RecipeList;