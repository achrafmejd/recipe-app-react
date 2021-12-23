import { useEffect, useState } from "react";
import { FaHeart, FaFontAwesomeFlag, FaLayerGroup, FaStar, FaExternalLinkSquareAlt} from 'react-icons/fa';
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar"
import "../styles/recipeList.css";
import Loader from '../components/Loader';


const FavList = () => {
    const [myFav, setMyFav] = useState(null);
 
    useEffect(()=>{
        /* var emptyArray = JSON.stringify(new Array());
        emptyArray = localStorage.getItem("myFavs"); */
        /* setMyFav(JSON.parse(localStorage.getItem("myFavs"))) */
        /* console.log(JSON.parse(JSON.parse(emptyArray)[0])); */
        setMyFav(JSON.parse(localStorage.getItem("myFavs")));
    }, [])
    //console.log(myFav);
    /* console.log("**********************");
    console.log(myFav); */

    return ( 
        <div className="recipeListContainer">
            <Navbar />
            <div className="container">
                
                { !myFav ? <Loader /> : 
                    myFav.map((element)=>{
                        element = JSON.parse(element);
                        return(
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
 
export default FavList;