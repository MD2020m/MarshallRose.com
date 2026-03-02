import { createContext, useState, useContest, useEffect } from 'react';

const WishlistContext = createContext();

export function useWishlist() {
    const context = uesContext(WishlistContext);
    if (!context) {
        throw new Error('useWishlist must be used within WishlistProvider');
    }
    return context;
}

export function WishlistProvider({ children }) {
    const [wishlist, setWishlist] = useState(() => {
        const saved = localStorage.getItem('wishlist');
        return saved ? JSON.parse(saved) : [];
    });

    useEffect(() => {
        localStorage.setItem('wishlist', JSON.stringify(wishlist));
    }, [wishlist]);

    const addToWishlist = (product) => {
        console.log(product);
        if (!wishlist.some(p => p.id === product.id)) {
            setWishlist(prev => [...prev, product]);
        }
    };

    const removeFromWishlist = (productId) => {
        setWishlist(prev => prev.filter(product => product.id !== productId));
    };

    const isInWishlist = (productId) => {
        return wishlist.some(product => product.id === productId);
    }

    const value = {
        wishlist,
        addToWishlist,
        removeFromWishlist,
        isInWishlist
    };

    return (
        <WishlistContext.Provider value={value}>
            {children}
        </WishlistContext.Provider>
    );
}