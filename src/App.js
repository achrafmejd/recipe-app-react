import React from "react";
import "./styles/main-styles.css";
import Api from "./components/Api";
import RecipeList from "./pages/RecipeList";
import Home from "./pages/Home";
import Recipe from "./pages/Recipe";
import { BrowserRouter as Router, Route , Routes} from "react-router-dom";



function App(){
    return(
        <Router>
            <Routes>
                <Route exact path="/" element={<Home />}>
                </Route>
                <Route path="/all-recipes" element={<RecipeList /> }>
                </Route>
            </Routes>
        </Router>
    )
}

export default App;