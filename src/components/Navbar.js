import '../styles/navbar.css';

const Header = () => {
    return (
        <header id="mynav">
            <div  className="navigation">
                <div className="logo">
                    <img src="/logo.png" width="40" height="40" alt="" />
                    <p>Recipe App</p>                    
                </div>

                <div className="nav-pages">
                    <ul>
                        <li><a className='hoverLink' href="/">Home</a></li>
                        <li><a className='hoverLink' href="/all-recipes">Menu</a></li>
                        <li><a className='hoverLink' href="#">Popular</a></li>
                        <li><a className='hoverLink' href="/favourites">My Watchlist</a></li>
                    </ul>
                </div>
            </div>

        </header>
    );
}
 
export default Header;