import React from "react";
import "./styles/main-styles.css";
import Api from "./components/Api";
import RecipeList from "./pages/RecipeList";
import Home from "./pages/Home";
import Recipe from "./pages/Recipe";
import { BrowserRouter as Router, Route , Switch} from "react-router-dom";



function App(){
    return(
        <Router>
            <Switch>
                    
               
                <Route exact path="/" element={<Home />}>
                    <Home />
                </Route>

                <Route path="/all-recipes" element={<RecipeList /> }>
                    <RecipeList />
                </Route>

                <Route path="/recipe/:id" element={<Recipe />}>
                    <Recipe />
                </Route>
            </Switch>
        </Router>
    )
}

export default App;