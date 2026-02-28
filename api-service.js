const API_BASE_URL = 'http://localhost:3000';

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

window.apiService = {fetchProducts};