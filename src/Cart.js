import './App.css'


function Cart(){
    function cart(){
        const cartBox = document.getElementById('box')
        cartBox.innerHTML = '1 Product'
        if(cartBox.classList.contains('hide')){
            cartBox.classList.remove('hide')
        }else{
            cartBox.classList.add('hide')
        }
    }
    return(
        <div className='shopping-cart'>
            <h2 onClick={cart} className='cart'><i className="fas fa-shopping-cart"></i></h2>
            <div className='cart-box hide' id='box'>
            </div>
        </div>
    );
}

export default Cart;