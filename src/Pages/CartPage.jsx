import ProductsGrid from '../Components/ProductsGrid';

function CartPage({ cart }) {
    return (
        <main className='main-content'>
            <h2 className='header-text'>Shopping Cart</h2>
            <ProductsGrid products={cart} />
        </main>
    )
}

export default CartPage;