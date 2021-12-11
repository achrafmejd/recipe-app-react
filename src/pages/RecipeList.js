import { useEffect, useState } from "react";

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
        <>
            <div className="container">
                {   !state ? <p>Loading...</p> : 
                    data.map((element)=>{
                        return (
                            <div className="item">
                                <div className="image">
                                    <img className="image" src={element.strMealThumb} alt="" />
                                </div>
                                <h2 className="title">
                                    {element.strMeal}
                                </h2>
                                <h3 className="title">
                                    {element.strCategory}
                                </h3>
                                <h5 className="title">
                                    {element.strArea}
                                </h5>
                            </div>
                                                    
                        )
                    })
                }
            
            </div>
        </>
     );
}
 

export default Receipts;