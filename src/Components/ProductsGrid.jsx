import { Link } from 'react-router-dom';
import ProductCard from './ProductCard';
import './ProductGrid.css';

function ProductsGrid({ products }) {
    return (
        <div className='products-grid'>
            {products.map(product => (
                <Link to={`/products/${product.productId}`} key={product.id} >
                    <ProductCard key={product.productId} product={product} />
                </Link>
            ))}
        </div>
    )
}

export default ProductsGrid;