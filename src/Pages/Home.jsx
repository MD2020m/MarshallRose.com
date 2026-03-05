import AboutPreview from '../Components/AboutPreview';
import ProductsPreview from '../Components/ProductsPreview';
import './Home.css';

function Home({ products }) {
    return (
        <main className="main-content">
            <ProductsPreview products={products}></ProductsPreview>
            <AboutPreview></AboutPreview>
        </main>
    )
}

export default Home;