import { useEffect, useState } from "react";

const FavList = () => {
    const [myFav, setMyFav] = useState([]);

    useEffect(()=>{
        setMyFav(
            parse(localStorage.getItem("myFavs"))
        )
        console.log(myFac);
    }, [])

    return ( 
        <div>
            
        </div>
     );
}
 
export default FavList;