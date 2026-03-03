import ProductCard from './ProductCard';
import './ProductGrid.css';

function ProductsGrid({ products }) {
    return (
        <div className='products-grid'>
            {products.map(product => (                
                    <ProductCard key={product.productId} product={product} />
            ))}
        </div>
    )
}

export default ProductsGrid;