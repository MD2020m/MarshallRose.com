import { useParams } from 'react-router-dom';
import { useState } from 'react';
import FabricSelectBtn from '../Components/FabricSelectBtn';
import DetailSelectBtn from '../Components/DetailSelectBtn';
import ProductReview from '../Components/ProductReview';
import { useWishlist } from '../Contexts/WishlistContext';
import './ProductPage.css';

function ProductPage({ products, cart, addToCart, removeFromCart, reviews }) {

    const {product_id} = useParams();

    const product_arr = products.filter(product => product.productId == product_id);
    const product = product_arr[0];
    console.log(product);

    const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
    const inWishlist = isInWishlist(product.productId);

    const handleWishlistclick = () => {
        if (inWishlist) {
            removeFromWishlist(product.productId);
        } else {
            addToWishlist(product);
        }
    }

    const productReviews = reviews.filter(review => review.productId == product_id);

    const getCartIds = () => {
        let cartIds = [];
        cart.forEach(cartItem => cartIds.push(cartItem.product.productId));
        console.log(cartIds);
        return cartIds;
    };

    const handleAddToCart = () => {
        addToCart({
            product,
            customOptions
        });
    };

    const handleRemoveFromCart = () => {
        removeFromCart(product.productId);
    };

    const defaultFabric = product.availableFabrics.fabrics[0];


    const [customOptions, setCustomOptions] = useState(() => {
        //let cartIds = [];
        //cart.forEach(cartItem => cartIds.push(cartItem.product.id));
        const cartIds = getCartIds();
        if (cartIds.includes(product.productId)) {
            return (cart.filter(cartItem => cartItem.product.productId === product.productId)[0].customOptions);
        } else {
            return {
                fabric: product.availableFabrics.fabrics[0],
                details: []
            };
        }
    });

    const selectFabric = (fabric) => {
        let newState = JSON.parse(JSON.stringify(customOptions));
        newState.fabric = fabric;
        setCustomOptions(newState);
    }

    const selectDetail = (detail) => {
        let newState = JSON.parse(JSON.stringify(customOptions));
        newState.details = [...newState.details, detail];
        setCustomOptions(newState);
    }

    const removeDetail = (detail) => {
        let newState = JSON.parse(JSON.stringify(customOptions));
        newState.details = newState.details.filter(activeDet => activeDet !== detail);
        setCustomOptions(newState);
    }

    return (
        <main className='main-content'>
            <h1>{product.name}</h1>
            <div className='product-info-div'>
                <p>{product.description}</p>
                <p className='price-text'>{product.price}</p>
            </div>
            <div className='custom-options-div'>
                <h3 className='section-header'>{`Customize your ${product.name}`}</h3>
                <div className='options-panel'>
                    <div className='fabric-selector'>
                        <h4>Select a Fabric:</h4>
                        <div className='selector-section'>
                            {product.availableFabrics.fabrics.map(fabric => (
                                <FabricSelectBtn key={fabric} fabric={fabric} selectFabric={selectFabric} 
                                    customOptions={customOptions}/>
                            ))}
                        </div>
                        <h4>Select Details:</h4>
                        <div className='selector-section'>
                            {product.availableDetails.details.map(detail => (
                                <DetailSelectBtn key={detail} detail={detail} selectDetail={selectDetail}
                                    removeDetail={removeDetail} customOptions={customOptions} />
                            ))}
                        </div>
                    </div>
                </div>
                {getCartIds().includes(product.productId) ? <button className='remove-cart-btn'
                    onClick={handleRemoveFromCart}>Remove from to cart</button>
                    : <button className='add-cart-btn' onClick={handleAddToCart}>Add to cart</button>}
                <button className={`wishlist-btn ${inWishlist ? 'added' : ''}`}
                onClick={handleWishlistclick}>
                    {inWishlist? 'Wishlisted' : 'Add to wishlist'}
                </button>
            </div>
            <ProductReview product={product} reviews={reviews} productReviews={productReviews}/>
        </main>
    )
}

export default ProductPage;