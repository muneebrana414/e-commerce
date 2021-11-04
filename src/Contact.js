import Nav from "./Nav";
import { useState } from 'react';
import Cart from "./Cart";

function Contact(){
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [subject,setSubject] = useState('')
    const [des,setDes] = useState('')
    const [message,setMessage] =useState([]);

    const nameList = message?.map((item,i) => {
        return<h2 key={i}>Thanks For Message {item[0]}</h2>
    })

    return(
        <div>
            <div className='about-us'>
                <div className="app-home">
                    <Nav />
                </div>
                <Cart />
                <div className='product-main'>
                    <h4 style={{color:'red',fontSize:'22px',fontWeight:'700',marginBottom:'15px'}}>contact us</h4>
                    <h2 style={{fontSize:'62px',letterSpacing:'5px', marginTop:'0'}}>let's get in touch</h2>
                </div>
            </div>
            <div className='about'>
                <div className='about-head'>
                    <h2>send us a meesage</h2>
                    <hr />
                </div>
                <div className='contact-flex'>
                    <div className='form'>
                        <form onSubmit={(e) => {
                            setMessage(mes => [...mes, [name,email,subject,des]])
                            e.preventDefault()}}>
                            <fieldset>
                                <input type='text' placeholder='Full Name' value={name} onChange={(e) => {
                                    setName(e.target.value)
                                }} required/>
                            </fieldset>
                            <fieldset>
                                <input  type='text' placeholder='Enter Your Email' value={email} onChange={(e) => {
                                    setEmail(e.target.value)
                                }} required/>
                            </fieldset>
                            <fieldset>
                                <input type='text' placeholder='Subject' value={subject} onChange={(e) => {
                                    setSubject(e.target.value)
                                }} required/>
                            </fieldset>
                            <fieldset>
                                <textarea placeholder='Your Message' value={des} onChange={(e) => {
                                    setDes(e.target.value)
                                }} required/>
                            </fieldset>
                            <button className='send' type='submit'>Send Message</button>
                        </form>
                    </div>
                    <div className='contact-list'>
                        <p style={{marginLeft:'30%', color:'red',letterSpacing:'3px',lineHeight:'30px'}}>  {nameList}
                        </p>
                    </div>
                </div>
                <hr style={{marginTop:'40px'}}/>
                    <div className='footer-copy'>
                        <p>COPYRIGHT © 2021 E-COMMERCE CO.. LTD. - DESIGN: <a href='#Main'>Rana Muneeb</a></p>
                    </div>
            </div>
        </div>
    );
}

export default Contact;