import ProductsGrid from '../Components/ProductsGrid';
import ProductCard from '../Components/ProductCard';

function  Products({ products }) {
    return (
        <main className='main-content'>
            <div className='content-header'>
                <h2>Shop Our Products</h2>
                <p>Discover the perfect new piece for your wardrobe</p>
            </div>
            <ProductsGrid products={products} />
        </main>
    )
}

export default Products;