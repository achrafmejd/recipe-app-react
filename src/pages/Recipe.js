import Navbar from "../components/Navbar";
import {
    useLocation
  } from "react-router-dom";
  import { useState , useEffect} from "react";

const Recipe = () => {
    const [ingredients, setIngredient] = useState([]);

    const [product, setProduct]=useState({});
	const location = useLocation();
	useEffect(()=>{
		setProduct(location.state);
        for(let i=1;i<=20;i++){
            setIngredient( ingredients => [...ingredients, 'strIngredient'+i]);
        }
	}, [])


    return ( 
        <div className="recipeListContainer">
        
            <Navbar />
            <div className="recipe-description">
                <div className="recipe-meta">
                    <div className="recipe-img">
                        <img src={product.strMealThumb}  alt="" />
                    </div>
                    <div className="recipe-ingredients">
                        <h4>Ingredient</h4>
                        {ingredients.map((e, index, element)=>{
                            
                            return(
                                <p className="ingredient">{product[e]}</p>
                            )
                        })}
                    </div>
                </div>
                <div className="recipe-docs">
                    <h1>{product.strMeal}</h1>
                    <p>{product.strInstructions}</p>
                </div>
            </div>
        </div>
     );
}
 
export default Recipe;