/* const axios = require('axios');
 */

import { useEffect, useState } from "react";

const Api = () => {
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
            {   !state ? <p>Loading...</p> : 
                data.map((element)=>{
                    return (
                        <img src={element.strMealThumb} alt="" />                        
                    )
                })
            }
        </>
     );
}
 
export default Api;
