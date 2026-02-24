import { Link } from 'react-router-dom';

function Header({ storeName, cartCount, headerMessage}) {

    return (
        <div className='header'>
            <h1 id='header-title'>{`${storeName}`}</h1>
            <p id='header-msg-text'>{`${headerMessage}`}</p>
            <div id='header-nav-div'>
                <nav id='header-nav'>
                    <button className='header-nav-btn'>
                        <Link to="/" className="nav-link">Home</Link>
                    </button>
                    <button className='header-nav-btn'>
                        <Link to="/products" className="nav-link">Products</Link>
                    </button>
                    <button className='header-nav-btn'>
                        <Link to='/about' className='nav-link'>About</Link>
                    </button>
                    {/*<button className='header-nav-btn'>
                        <Link to='/login' className='nav-link'>Log in</Link>
                    </button>*/}
                    <button className='header-nav-btn'>
                        <Link to="/cart" className='nav-link'>Cart {cartCount}</Link>
                    </button>
                </nav>
            </div>
        </div>);  
}

export default Header;