import {Link} from "react-router-dom";


function Header (prop) {
    return <nav className="nav">
        <Link to='/'>
            <div> People App</div>
        </Link>
    </nav>
  }
  
  export default Header;