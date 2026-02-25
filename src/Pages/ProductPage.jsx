import { useParams } from 'react-router-dom';
import { useState } from 'react';
import FabricSelectBtn from '../Components/FabricSelectBtn';

function ProductPage({ products, cart, addToCart, removeFromCart }) {

    const {product_id} = useParams();

    const product = products[product_id];

    const handleAddToCart = () => {
        addToCart(product);
    };

    const handleRemoveFromCart = () => {
        removeFromCart(product.id);
    };

    const defaultFabric = product.availableFabrics.fabrics[0];


    const [customOptions, setCustomOptions] = useState({
        fabric: defaultFabric,
        details: []
    });

    const selectFabric = (fabric) => {
        console.log(fabric);
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
        newState.details.filter(activeDet => activeDet !== detail);
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
                        {product.availableFabrics.fabrics.map(fabric => (
                            <FabricSelectBtn fabric={fabric} selectFabric={selectFabric} />
                        ))}
                    </div>
                </div>
                {cart.includes(product) ? <button className='remove-cart-btn'
                    onClick={handleRemoveFromCart}>Remove from to cart</button>
                    : <button className='add-cart-btn' onClick={handleAddToCart}>Add to cart</button>}
            </div>
        </main>
    )
}

export default ProductPage;