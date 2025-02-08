import { NavLink } from "react-router-dom";


const Toolbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark ">
            <div className="container">
                <NavLink to='/' className="navbar-brand" style={{color:"black"}}>Quotes Central</NavLink>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <NavLink to='/Quotes' className="nav-link" style={{color:"blue"}}>Quotes</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/NewQuote' className="nav-link" style={{color:"blue"}}>NewQuote</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Toolbar;
