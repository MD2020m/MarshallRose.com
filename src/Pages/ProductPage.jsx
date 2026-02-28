import { useParams } from 'react-router-dom';
import { useState } from 'react';
import FabricSelectBtn from '../Components/FabricSelectBtn';
import DetailSelectBtn from '../Components/DetailSelectBtn';
import './ProductPage.css';

function ProductPage({ products, cart, addToCart, removeFromCart }) {

    const {product_id} = useParams();

    const product = products[product_id];

    const getCartIds = () => {
        let cartIds = [];
        cart.forEach(cartItem => cartIds.push(cartItem.product.id));
        return cartIds;
    };

    const handleAddToCart = () => {
        addToCart({
            product,
            customOptions
        });
    };

    const handleRemoveFromCart = () => {
        removeFromCart(product.id);
    };

    const defaultFabric = product.availableFabrics.fabrics[0];


    const [customOptions, setCustomOptions] = useState(() => {
        //let cartIds = [];
        //cart.forEach(cartItem => cartIds.push(cartItem.product.id));
        const cartIds = getCartIds();
        if (cartIds.includes(product.id)) {
            return (cart.filter(cartItem => cartItem.product.id === product.id)[0].customOptions);
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
                {getCartIds().includes(product.id) ? <button className='remove-cart-btn'
                    onClick={handleRemoveFromCart}>Remove from to cart</button>
                    : <button className='add-cart-btn' onClick={handleAddToCart}>Add to cart</button>}
            </div>
        </main>
    )
}

export default ProductPage;