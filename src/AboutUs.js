import About from './About';
import './App.css'
import Cart from './Cart';
import Nav from "./Nav";
import TeamMember from './TeamMember';

function AboutUs(){
    return(
        <div>
            <div className='about-us'>
                <div className="app-home">
                    <Nav />
                </div>
                <Cart />
                <div className='product-main'>
                    <h4 style={{color:'red',fontSize:'22px',fontWeight:'700',marginBottom:'15px'}}>about us</h4>
                    <h2 style={{fontSize:'62px',letterSpacing:'5px', marginTop:'0'}}>our company</h2>
                </div>
            </div>
            <div className='about-background'>
                <About />
            </div>
            <div className='about'>
                <div>
                    <div className='about-head'>
                        <h2>our team members</h2>
                        <hr />
                    </div>
                    <div>
                        <TeamMember />
                        <hr style={{marginTop:'40px'}}/>
                        <div className='footer-copy'>
                            <p>COPYRIGHT © 2021 E-COMMERCE CO.. LTD. - DESIGN: <a href='#Main'>Rana Muneeb</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default AboutUs;