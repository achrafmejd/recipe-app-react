import Navbar from "../components/Navbar"

const Recipe = () => {
    return ( 
        <div className="recipeListContainer">
            <Navbar />
            <div className="recipe-description">
                <div className="recipe-meta">
                    <div className="recipe-img">A</div>
                    <div className="recipe-ingredients">B</div>
                </div>
                <div className="recipe-docs">
                    <h1>Title</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio iste itaque, possimus explicabo delectus illum quod pariatur ipsam nam magni ab aut similique, illo distinctio ex incidunt, voluptatem optio temporibus!</p>
                </div>
            </div>
        </div>
     );
}
 
export default Recipe;