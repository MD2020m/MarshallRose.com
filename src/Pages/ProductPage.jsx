import { useParams } from 'react-router-dom';

function ProductPage({ products }) {
    const {product_id} = useParams();

    const product = products[product_id];

    return (
        <main className='product-page'>
            <h1>Image Placeholder</h1>
            <div className='product-info-div'>
                <h2 className='header-text'>{product.name}</h2>
                <p className='main-content'>{product.description}</p>
                <p className='price-text'>{product.price}</p>
                {/*Implement selected reviews display here*/}
                {/*Wishlist button here*/}
            </div>
            <div className='custom-options-div'>
                <h3 className='section-header'>{`Customize your ${product.name}`}</h3>
                <div className='options-panel'>
                    {/*Implement customization checkboxes here*/}
                </div>
            </div>
        </main>
    )
}

export default ProductPage;