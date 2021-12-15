import { useEffect, useState } from "react";
import Navbar from "../components/Navbar"
import "../styles/recipeList.css";
import { FaHeart, FaFontAwesomeFlag, FaLayerGroup, FaStar, FaExternalLinkSquareAlt} from 'react-icons/fa';
import { Link } from "react-router-dom";
import Loader from '../components/Loader';

const RecipeList = () => {
    const [state, setState] = useState(false);
    const [data, setData] = useState(null);
    const [myFav, setMyFav] = useState(localStorage.getItem("myFavs") || []);

    const [heartState, setHeartState] = useState({
        color : 'white'
    })
    const [heartIcon, setHeartIcon] = useState({
        display : ''
    })
    useEffect(()=>{
        fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=")
            .then(res=>{
                    return res.json();
            })
            .then((result)=>{
                    setData(result.meals);
                    setState(true);
            })
            .catch((e)=>{
                    console.log(e);
            })
    }, [])
    
    useEffect(()=>{
        localStorage.setItem("myFavs", JSON.stringify(myFav));
    }, [myFav])
    function add(item) {
        console.log(item);
        setMyFav([...myFav, item]);
        /* if(heartState.color === 'white'){
            // If the item is never selected
            // Turn the heart to red and display it as a block
            setHeartState({
                color: 'red'
            })
            setHeartIcon({
                display: 'block'
            });
        }else{
            // If it's already selected
            // Turn it to white since it should be unselected
            // And turn the display to the default value
            setHeartState({
                color: 'white'
            });
            setHeartIcon({
                display: ''
            });
        } */
    }

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
                                <a className="addWatchlist" href="#/" style={heartIcon}>
                                    <FaHeart key={element}  id="heart" className="icon" style={heartState} onClick={()=>add(element)}/>
                                </a>
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