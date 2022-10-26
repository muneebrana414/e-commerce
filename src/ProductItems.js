import './App.css';
import product_01 from './Images/product_01.jpg';
import product_02 from './Images/product_02.jpg';
import product_03 from './Images/product_03.jpg';
import product_04 from './Images/product_04.jpg';
import product_05 from './Images/product_05.jpg';
import product_06 from './Images/product_06.jpg';

function ProductItems(props){
    const num = props.num;
    console.log(num)
    const product =[
        {
            img: product_01,
            title: 'Tittle 01',
            price: '$ 4.50'
        },
        {
            img: product_02,
            title: 'Tittle 01',
            price: '$ 3.75'
        },
        {
            img: product_03,
            title: 'Tittle 03',
            price: '$ 6.00'
        },
        {
            img: product_04,
            title: 'Tittle 04',
            price: '$ 1.25'
        },
        {
            img: product_05,
            title: 'Tittle 05',
            price: '$ 2.75'
        },
        {
            img: product_06,
            title: 'Tittle 06',
            price: '$ 2.00'
        }

    ]
    function addToCart(i){
        console.log(i)
    }

    const item = product.map((pro, i) => {
        return <div className="item" key={i}>
        <img src={pro.img} alt='product'/>
        <div className='img-detail'>
            <h2 className='img-title'>{pro.title}</h2>
            <h3 className='img-price'>{pro.price}</h3>
            <p className='img-des'>Lorem ipsume dolor sit amet, adipisicing elite. Itaque, corporis nulla aspernatur.</p>
            <button onClick={e => addToCart(i)}>Add To Cart</button>
        </div>
    </div>
    })
    return(
        <div>
            <div className='items'>
                {item}
            </div>
        </div>
    );
}

export default ProductItems;