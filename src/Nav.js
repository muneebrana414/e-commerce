import { Link } from 'react-router-dom';
import './App.css'


function Nav() {
    
    return(
        <div className='nav'>
            <h2 style={{textTransform:'uppercase'}}>E-<span style={{color: 'red',cursor:'pointer'}}>Commerece</span></h2>
            <ul className='nav-list' id='nav'>
                <li className='active'><Link to='/'>Home</Link></li>
                <li><Link to='/product'>Our Product</Link></li>
                <li><Link to='/about-us'>About</Link></li>
                <li><Link to='/contact'>Contact</Link></li>
            </ul>
        </div>
    );
}


export default Nav