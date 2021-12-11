import React from "react";
import "./styles/main-styles.css";
import Navbar from "./components/Navbar";
import Api from "./components/Api";
import RecipeList from "./pages/RecipeList";


function App(){
    return(
        <>
            <Navbar />
            <RecipeList />
        </>
    )
}

export default App;