import Cart from "./Cart";
import Nav from "./Nav";



function Main(props){
    const title = props.title
    console.log(title)
    return(
        <div className="app">
          <div className="app-home">
            <Nav />
          </div>
          <Cart />
          <div className='home-content'>
            <h2 style={{color: 'red',fontSize:'30px'}}>Best Offer</h2>
            <h1 style={{marginTop:'0'}}>New Arrivals on Sale</h1>
          </div>
      </div>
    );
}

export default Main;