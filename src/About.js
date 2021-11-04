import feature_image from './Images/feature_image.jpg'


function About() {
    return(
        <div className='about'>
            <div className='about-head'>
                <h2>About E-Commerce</h2>
                <hr />
            </div>
            <div className='about-flex'>
                <div className='about-detail'>
                    <h3>Looking For best product?</h3>
                    <p>This template is free to use for your business websites. However, you have no permission to redistribute the downloadable ZIP file on any template collection website. Contact us for more info.</p>
                    <ul className='about-list'>
                        <li>Lorem ipsum dolor sit amet</li>
                        <li>Consectetur an adipisicing elit</li>
                        <li>It aquecorporis nulla aspernatur</li>
                        <li>Corporis, omnis doloremque</li>
                        <li>Non cum id reprehenderit</li>
                    </ul>
                    <button>Read More</button>
                </div>
                <img src={feature_image} alt='Feature'/>
            </div>
        </div>
    );
}


export default About;