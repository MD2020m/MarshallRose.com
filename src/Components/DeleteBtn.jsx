function DeleteBtn({ product, deleteProduct }) {
    const handleDeleteProduct = () => {
        deleteProduct(product.productId);
    }

    return (
        <button className='delete-product-btn' onClick={handleDeleteProduct}>
            Delete
        </button>
    )
}

export default DeleteBtn