import ProductItems from './ProductItems';

function Product(){
    return(
        <div>
            <div className="product">
                <div className='product-heading'>
                    <h2>Latest Product</h2>
                    <a href='#Main'>View All Products</a>
                </div>
                <hr />
                <ProductItems />
            </div>
        </div>
    );
}


export default Product;