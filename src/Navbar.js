import { Link } from 'react-router-dom';

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>The Ken blog</h1>
            <div className="links">
                {/* use the link component of react-router to prevent requests to the server */}
                <Link to="/">Home</Link>
                <Link to="/create">New Blog</Link>
            </div>
        </nav>
     );
}

export default Navbar;