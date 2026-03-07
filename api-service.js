const API_BASE_URL = import.meta.env.VITE_DEV_API_URL;

export async function fetchProducts() {
    try {
        const response = await fetch(`${API_BASE_URL}/api/products`);
        if (!response.ok) {
            throw new Error('Failed to fetch products');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fething products', error);
        throw error;
    }
}

export async function createProduct( name, description, category, price, availableFabrics, availableDetails ) {
    const postData = {
        name, 
        description,
        category,
        availableFabrics,
        availableDetails,
        price
    };

    try {
        const response = await fetch(`${API_BASE_URL}/api/products`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(postData)
        });

        if (!response.ok) {
            throw new Error('Failed to create new product');
        }

        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error("Error creating product", error);
        throw error;
    }
}

export async function deleteProduct(productId) {
    console.log(productId);
    try {
        const response = await fetch(`${API_BASE_URL}/api/products/${productId}`,{
            method: 'DELETE'
        });
        if (!response.ok) {
            throw new Error('Failed to delete product');
        }
        return;
    } catch (error) {
        console.error('Error deleteing product', error);
        throw error;
    }
}

export async function fetchReviews() {
    try {
        const response = await fetch(`${API_BASE_URL}/api/reviews`);
        if (!response.ok) {
            throw new Error('Failed to fetch reviews');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching reviews: ', error);
        throw error;
    }
}

export async function postReview(userId, productId, roses) {
    const postData = {
        roses, userId, productId
    }
    
    try {
        const response = await fetch(`${API_BASE_URL}/api/reviews`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(postData)
        });

        if (!response.ok) {
            throw new Error('Unable to create new review');
        }

        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Failed to create review: ', error);
        throw error;
    }
}

export async function fetchUsers() {
    try {
        const response = await fetch(`${API_BASE_URL}/api/users`);
        if (!response.ok) {
            throw new Error('Failed to fetch users');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching users', error);
        throw error;
    }
}

export async function postUser(username, password, role) {
    const postData = {
        username,
        password,
        role
    };

    try {
        const response = await fetch(`${API_BASE_URL}/api/users`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(postData)
        });

        if (!response.ok) {
            throw new Error("Failed to create new user");
        }

        const data = await response.json();
    } catch (error) {
        console.error('Failed to create new user', error);
    }
}

window.apiService = {fetchProducts, fetchReviews, postReview, fetchUsers, postUser};