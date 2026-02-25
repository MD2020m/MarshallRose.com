import ProductsGrid from '../Components/ProductsGrid';

function CartPage({ cart, cartCount }) {
    let cartProducts = [];
    cart.forEach(cartItem => {
        cartProducts.push(cartItem.product);
    });
    
    return (
        <main className='main-content'>
            <h2 className='header-text'>Shopping Cart</h2>
            {cartCount === 0 ? <h3>Your cart is empty</h3>
                : <div className='cart-contents'>
                    <h3>Total: ${cartProducts.reduce((total, product) => total + product.price, 0)}</h3>
                    <ProductsGrid products={cartProducts} />
                </div>}
        </main>
    )
}

export default CartPage;