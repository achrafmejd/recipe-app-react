import { useEffect, useState } from "react";
import { FaHeart, FaFontAwesomeFlag, FaLayerGroup, FaStar, FaExternalLinkSquareAlt} from 'react-icons/fa';
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar"


const FavList = () => {
    const [myFav, setMyFav] = useState(null);

    useEffect(()=>{
        setMyFav( JSON.parse(localStorage.getItem("myFavs")))
    }, [])
    console.log(JSON.parse(localStorage.getItem("myFavs")));

    return ( 
        <div className="recipeListContainer">
            <Navbar />
            <div className="container">
                
                {    
                    myFav.map((element)=>{
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
                                <a className=" Watchlist" href="#/">
                                    <FaHeart key={element}  id="heart" className="icon" onClick={()=> (element)}/>
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
 
export default FavList;