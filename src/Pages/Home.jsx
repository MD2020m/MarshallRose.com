import AboutPreview from '../Components/AboutPreview';
import ProductsPreview from '../Components/ProductsPreview';

function Home() {
    return (
        <main className="main-content">
            <ProductsPreview></ProductsPreview>
            <AboutPreview></AboutPreview>
        </main>
    )
}

export default Home;