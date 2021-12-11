import '../styles/hero.css';
import Navbar from "../components/Navbar";

const Hero = () => {
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
                        <input type="text" placeholder='What are you looking for ?'/>
                        <button>Search</button>
                    </form>
                </div>
                

                <div className="buttons">
                    <div className="buttons-container">
                        <a className='styledButton' href="#">Menu</a>
                        <a className='hoverLink' href="#">Watch our Menu</a>
                    </div>
                </div>
            </div>

        </div>
     );
}
 
export default Hero;