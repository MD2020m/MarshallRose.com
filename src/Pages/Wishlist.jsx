import ProductsGrid from "../Components/ProductsGrid";

import { useWishlist } from "../Contexts/WishlistContext";

function Wishlist() {
    const { wishlist } = useWishlist();

    return (
        <main className='main-content'>
            <div className='content-header'>
                <h2>Your Wishlist</h2>
            </div>
            {wishlist.length > 0? (
                <ProductsGrid products={wishlist} />
            ) : (
                <div className='empty-state'>
                    <p>No products in your wishlist yet. Start adding some from the Products page</p>
                </div>
            )}
        </main>
    )
}

export default Wishlist;