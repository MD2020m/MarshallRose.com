import { Link } from 'react-router-dom';
import './ProductCard.css';
import { useWishlist } from '../Contexts/WishlistContext';

function ProductCard({product}) {
    const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
    const inWishlist = isInWishlist(product.productId);

    const handleWishlistClick = () => {
        if (inWishlist) {
            removeFromWishlist(product.productId);
        } else {
            addToWishlist(product);
        }
    }

    console.log(product);

    return (
        <div className='product-card'>
            <Link to={`/products/${product.productId}`} key={product.productId} >
                <div className='product-info'>
                    <p className='product-card-txt'>{product.name}</p>
                    <p className='product-card-txt'>{product.price}</p>
                </div>
            </Link>
            <button className={`wishlist-btn ${inWishlist ? 'added' : ''}`}
            onClick={handleWishlistClick}>
                {inWishlist ? 'Wishlisted' : 'Add to wishlist'}
            </button>
        </div>
    )
}

export default ProductCard;