import '../styles/hero.css';
import Navbar from "../components/Navbar";
import { useEffect, useState } from 'react';
import RecipeList from '../pages/RecipeList';
import { Link } from "react-router-dom";

const Hero = () => {
    const [state, setState] = useState(false);
    const [data, setData] = useState(null);
    const  [text, setText] = useState('');
    const [sugg, setSugg] = useState([]);
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
    const onChangeHandler = (text) =>{
        let matches = []
        if(text.length >0){
            matches = data.filter((dt)=>{
                const regex = new RegExp(`${text}`, "gi");
                return dt.strMeal.match(regex);
            })
        }
        console.log(matches);
        setSugg(matches);
        setText(text);
    }
    return ( 
        <div className="hero">
            <Navbar />

            <div className="left-div">

                    <div className="desc">
                        <div className="text">
                            <h1>Good food choices are <br />good investments</h1>
                            <p>There is a powerful need for symbolism, and that means the architecture must have something that appeals to the human heart.</p>

                        </div>
                    </div>

                
                
                <div className="form-container">
            
                    <form action="">
                        <input  type="text" 
                                placeholder='What are you looking for ?' 
                                onChange={(e)=>{onChangeHandler(e.target.value)}}
                                value={text}
                        />
                        <div className='s-container'>
                            {
                                sugg && sugg.map((s, i)=>{
                                        return(
                                            <Link key={s.idMeal} className="sugg-container" to={{
                                                pathname : '/recipe/'+s.idMeal,
                                                state: s
                                            }}>{s.strMeal}</Link>
/*                                             <p className='sugg-container' key={s.idMeal}>{s.strMeal}</p>
 */                                        )
                                })
                            }
                        </div>
{/*                         <button className='styledButton'>Search</button>
 */}                    </form>
                </div>
                

                <div className="buttons">
                    <div className="buttons-container">
                        <a className='styledButton' href="/all-recipes">Menu</a>
                        <a className='hoverLink' href="#">My Favourites Recipes</a>
                    </div>
                </div>
            </div>

        </div>
     );
}
 
export default Hero;