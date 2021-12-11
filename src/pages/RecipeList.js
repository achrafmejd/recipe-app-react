import { useEffect, useState } from "react";
import Navbar from "../components/Navbar"
import "../styles/recipeList.css";
import { FaHeart, FaFontAwesomeFlag, FaLayerGroup, FaStar, FaExternalLinkSquareAlt} from 'react-icons/fa';


const Receipts = () => {
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
                {   !state ? <p>Loading...</p> : 
                    data.map((element)=>{
                        return (
                            <div className="item">
                                <div className="image">
                                    <img className="image" src={element.strMealThumb} alt="" />
                                </div>
                                {/* <h2 className="title">
                                    
                                    {element.strMeal}
                                </h2> */}
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
                                {/* 
                                <h3 className="title category">
                                    <FaLayerGroup />&nbsp;
                                    {element.strCategory}
                                </h3>
                                <h5 className="title country">
                                    <FaFontAwesomeFlag />&nbsp;
                                    {element.strArea}
                                </h5> */}
                                <a className="addWatchlist" href="#"><FaHeart className="icon"/></a>
                                <a href="#" className="goto"><FaExternalLinkSquareAlt className="gotoIcon"/></a>
                            </div>
                                                    
                        )
                    })
                }
            
            </div>
        </div>
     );
}
 

export default Receipts;