import './ProductCard.css';

function ProductCard({product}) {

    return (
        <div className='product-card'>
            <div className='img-placeholder'>
                <h3>Placeholder for product image</h3>
                {product.imageUrl ? <img src={product.imageUrl} crossOrigin="anonymous"/> : <p> No Image</p>}
            </div>
            <div className='product-info'>
                <p className='product-card-txt'>{product.name}</p>
                <p className='product-card-txt'>{product.price}</p>
            </div>
        </div>
    )
}

export default ProductCard;