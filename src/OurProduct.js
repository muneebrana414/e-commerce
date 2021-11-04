import './App.css';
import Cart from './Cart';
import Nav from "./Nav";
import ProductItems from "./ProductItems";
import { useState } from 'react';



function OurProduct(){
    const [num,setNum] = useState();
    // function handleFilter(i){
    //     <ProductItems onFilter={i} />
    //     console.log(i)
    // }
    const filters = ['All Product','Featured','Flash Deal','Last Minute']
    const filter = filters.map((item,i) => {
        return<h4 key={i} onClick={(i) => {
            return setNum(i)
        }}>{item}</h4>
    })
    return(
        <div>
            <div className='our-product'>
                <div className="app-home">
                    <Nav />
                </div>
                <Cart />
                <div className='product-main'>
                    <h4 style={{color:'red',fontSize:'22px',fontWeight:'700',marginBottom:'15px'}}>new Arrivals</h4>
                    <h2 style={{fontSize:'62px',letterSpacing:'5px', marginTop:'0'}}>E-Commerce</h2>
                </div>
            </div>        
            <div className="product">
                <div className='product-heading' style={{justifyContent:'center'}}>
                    {filter}
                </div>
                <hr />  
                <ProductItems num={num}/>
                <hr style={{marginTop:'40px'}}/>
                <div className='footer-copy'>
                    <p>COPYRIGHT © 2021 E-COMMERCE CO.. LTD. - DESIGN: <a href='#Main'>Rana Muneeb</a></p>
                </div>
            </div>
            
        </div>
    );
}


export default OurProduct;