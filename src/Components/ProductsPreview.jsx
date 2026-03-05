import ProductCard from "./ProductCard";
import { Link } from 'react-router-dom';
import './ProductsPreview.css';

function ProductsPreview({ products }) {

    let featuredProducts;
    if (products.length > 5) {
        featuredProducts = [
            products[1],
            products[2],
            products[3],
            products[4],
            products[5]
        ];
    } else {
        featuredProducts = products;
    }

    return (
        <div className='products-preview'>
            <h2 id='prev-products'>Featured Products</h2>
            <div className='featured-products-div'>
                {featuredProducts.map(product => (<ProductCard product={product} />))}
            </div>
            <button className='nav-btn'>
                <Link to='/products' className='prev-nav-link'>
                    Shop all products
                </Link>
            </button>
        </div>
    )
}

export default ProductsPreview