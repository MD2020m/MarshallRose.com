import { Link } from 'react-router-dom';
import ProductCard from './ProductCard';
import './ProductGrid.css';

function ProductsGrid({ products }) {
    return (
        <div className='products-grid'>
            {products.map(product => (
                <Link to={`/products/${product.id}`} key={product.id} >
                    <ProductCard key={product.id} product={product} />
                </Link>
            ))}
        </div>
    )
}

export default ProductsGrid;