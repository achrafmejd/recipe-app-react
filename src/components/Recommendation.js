import "../styles/recom.css";
import { useEffect, useState } from "react";
import { FaHeart, FaFontAwesomeFlag, FaLayerGroup, FaStar, FaExternalLinkSquareAlt} from 'react-icons/fa';
import { Link } from "react-router-dom";
import Loader from "./Loader";

const Recommendation = () => {
    
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

    const addWatchList = (e)=>{
        /* const heart = document.getElementById('heart');
        heart.style.color = 'red'; */
        document.getElementById('heart').style.color = 'red';
/*         alert(a);
 */
    }
    return ( 
        <div>
            <section className="recomm">
                <h1 className="recom-title">OUR RECOMMENDATION</h1>
                <div className="container">
                {   !state ? <p>Loading...</p>: 
                    data.slice(0,4).map((element)=>{
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
                                
                                <a className="addWatchlist" href="#/" onClick={(e)=>addWatchList(e)}><FaHeart key={element.idMeal} id="heart" className="icon"/></a>
                                
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
            </section>
        </div>
     );
}
 
export default Recommendation;