import { fetchProducts, createProduct,
    deleteProduct, fetchReviews, postReview
 } from '../../api-service';

describe('fetchProducts', () => {
    
    const mockProducts = [
        { productId: 1, name: 'shirt', price: 25 },
        { productId: 2, name: 'pants', price: 30 }
    ];

    beforeEach(() => {
        global.fetch = vi.fn();
    });

    afterEach(() => {
        vi.clearAllMocks();
    });

    test('returns product data when fetch is successful', async () => {

        global.fetch.mockResolvedValue({
            ok: true,
            json: async () => mockProducts
        });

        const result = await fetchProducts();

        expect(global.fetch).toHaveBeenCalledTimes(1);
        expect(result).toEqual(mockProducts);
    });

    test('throws an error when response is not ok', async () => {
        
        global.fetch.mockResolvedValue({
            ok: false
        });

        await expect(fetchProducts()).rejects.toThrow('Failed to fetch products');

        expect(global.fetch).toHaveBeenCalledTimes(1);
    });
});

describe('createProduct', () => {
    
    const mockProduct = {
        name: 'sample shirt',
        description: 'a good shirt for testing',
        category: 'shirts',
        price: 25,
        availableFabrics: {fabrics: ['cotton']},
        availableDetails: { details: ['embroidery', 'monogram'] }
    };

    beforeEach(() => {
        vi.stubGlobal('fetch', vi.fn());
    });

    afterEach(() => {
        vi.clearAllMocks();
    });

    test('sends POST request with correct data when successful', async () => {
        fetch.mockResolvedValue({
            ok: true,
            json: async () => ({ productId: 1, ...mockProduct })
        });

        await createProduct(
            mockProduct.name,
            mockProduct.description,
            mockProduct.category,
            mockProduct.price,
            mockProduct.availableFabrics,
            mockProduct.availableDetails
        );

        expect(fetch).toHaveBeenCalledTimes(1);

        const [url, options] = fetch.mock.calls[0];

        expect(url).toContain('/api/products');
        expect(options.method).toBe('POST');
        expect(options.headers['Content-Type']).toBe('application/json');

        expect(JSON.parse(options.body)).toEqual(mockProduct);
    });

    test('throws error when response is not ok', async () => {

        fetch.mockResolvedValue({
            ok: false
        });

        await expect(
            createProduct(
                mockProduct.name,
                mockProduct.description,
                mockProduct.category,
                mockProduct.price,
                mockProduct.availableFabrics,
                mockProduct.availableDetails
            )
        ).rejects.toThrow('Failed to create new product');
    });
});

describe('deleteProduct', () => {
    const productId = 42;

    beforeEach(() => {
        vi.stubGlobal('fetch', vi.fn());
    });

    afterEach(() => {
        vi.clearAllMocks();
    });

    test('sends DELETE request to correct endpoint when successful', async () => {
        fetch.mockResolvedValue({
            ok: true
        });

        await deleteProduct(productId);

        expect(fetch).toHaveBeenCalledTimes(1);

        const [url, options] = fetch.mock.calls[0];

        expect(url).toContain(`/api/products/${productId}`);
        expect(options.method).toBe('DELETE');
    });

    test('throws error when response is not ok', async () => {
        fetch.mockResolvedValue({
            ok: false
        });

        await expect(deleteProduct(productId)).rejects.toThrow('Failed to delete product');

        expect(fetch).toHaveBeenCalledTimes(1);
    });
});

describe('fetchReviews', () => {
    const mockReviews = [
        {
            reviewId: 1,
            userId: 0,
            roses: 5
        },
        {
            reviewId: 2,
            userId: 1,
            roses: 3
        }
    ];

    beforeEach(() => {
        vi.stubGlobal('fetch', vi.fn());
    });

    afterEach(() => {
        vi.clearAllMocks();
    });

    test('returns review data when fetch is successful', async () => {
        fetch.mockResolvedValue({
            ok: true,
            json: async () => mockReviews
        });

        const result = await fetchReviews();
        
        expect(fetch).toHaveBeenCalledTimes(1);
        expect(fetch).toHaveBeenCalledWith(expect.stringContaining('/api/reviews'));
        expect(result).toEqual(mockReviews);
    });

    test('throws error when response is not ok', async () => {
        
        fetch.mockResolvedValue({
            ok: false
        });

        await expect(fetchReviews()).rejects.toThrow('Failed to fetch reviews');

        expect(fetch).toHaveBeenCalledTimes(1);
    });
})

describe('postReview', () => {

    const mockReview = {
        userId: 10,
        productId: 5,
        roses: 4
    };

    beforeEach(() => {
        vi.stubGlobal('fetch', vi.fn());
    });

    afterEach(() => {
        vi.clearAllMocks();
    });

    test('sends POST request with correct data when successful', async () => {
        fetch.mockResolvedValue({
            ok: true,
            json: async () => ({reviewId: 1, ...mockReview})
        });

        await postReview(
            mockReview.userId,
            mockReview.productId,
            mockReview.roses
        );

        expect(fetch).toHaveBeenCalledTimes(1);

        const [url, options] = fetch.mock.calls[0];

        expect(url).toContain('/api/reviews');
        expect(options.method).toBe('POST');
        expect(options.headers['Content-Type']).toBe('application/json');
        expect(JSON.parse(options.body)).toEqual(mockReview);
    });

    test('throws error when response is not ok', async () => {
        
        fetch.mockResolvedValue({
            ok: false
        });

        await expect(
            postReview(
                mockReview.userId, 
                mockReview.productId, 
                mockReview.roses)).rejects.toThrow('Unable to create new review');

        expect(fetch).toHaveBeenCalledTimes(1);

    })
})

