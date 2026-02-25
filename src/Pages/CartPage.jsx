import ProductsGrid from '../Components/ProductsGrid';

function CartPage({ cart, cartCount }) {
    return (
        <main className='main-content'>
            <h2 className='header-text'>Shopping Cart</h2>
            {cartCount === 0 ? <h3>Your cart is empty</h3>
                : <div className='cart-contents'>
                    <h3>Total: ${cart.reduce((total, product) => total + product.price, 0)}</h3>
                    <ProductsGrid products={cart} />
                </div>}
        </main>
    )
}

export default CartPage;