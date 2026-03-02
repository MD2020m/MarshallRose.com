import './ProductCard.css';
import { useWishlist } from '../Contexts/WishlistContext';

function ProductCard({product}) {
    const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
    const inWishlist = isInWishlist(product.id);

    const handleWishlistClick = () => {
        if (inWishlist) {
            removeFromWishlist(product.id);
        } else {
            addToWishlist(product);
        }
    }

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
            <button className={`wishlist-btn ${inWishlist ? 'added' : ''}`}
            onClick={handleWishlistClick}>
                {inWishlist ? 'Wishlisted' : 'Add to wishlist'}
            </button>
        </div>
    )
}

export default ProductCard;