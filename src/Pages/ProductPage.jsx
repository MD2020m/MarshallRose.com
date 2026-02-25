import { useParams } from 'react-router-dom';

function ProductPage({ products, cart, addToCart, removeFromCart }) {
    const {product_id} = useParams();

    const product = products[product_id];

    const handleAddToCart = () => {
        addToCart(product);
    };

    const handleRemoveFromCart = () => {
        removeFromCart(product.id);
    };

    return (
        <main className='main-content'>
            <h1>Image Placeholder</h1>
            <div className='product-info-div'>
                <h2>{product.name}</h2>
                <p>{product.description}</p>
                <p className='price-text'>{product.price}</p>
                {/*Implement selected reviews display here*/}
                {/*Wishlist button here*/}
            </div>
            <div className='custom-options-div'>
                <h3 className='section-header'>{`Customize your ${product.name}`}</h3>
                <div className='options-panel'>
                    {/*Implement customization checkboxes here*/}
                </div>
                {cart.includes(product) ? <button className='remove-cart-btn'
                    onClick={handleRemoveFromCart}>Remove from to cart</button>
                    : <button className='add-cart-btn' onClick={handleAddToCart}>Add to cart</button>}
            </div>
        </main>
    )
}

export default ProductPage;