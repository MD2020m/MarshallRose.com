import { useAuth } from '../Contexts/AuthContext';
import { Navigate } from 'react-router-dom';
import { deleteProduct, createProduct } from '../../api-service';
import { useState } from 'react';
import DeleteBtn from '../Components/DeleteBtn';

function AdminPage({ products }) {
    
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState('');
    const availableFabrics = { fabrics: ['cotton','silk']};
    const availableDetails = { details: ['embroidery']};

    const { hasRole } = useAuth();

    const handleSubmit = (e) => {
        e.preventDefault();
        
        try{
            createProduct(name, description, category, price, availableFabrics, availableDetails);
        } catch (error) {
            console.error('Failed to create new product: ', error);
        }
    }

    if (!hasRole('admin')) {
        return <Navigate to="/" replace />;
    }

    return (
        <div className="admin-page">
            <h2>Admin Dashboard</h2>

            <div className='products-list'>
                {products.map(product => (
                    <div key={product.productId} className='product-row'>
                        <p>{product.name}</p>
                        <DeleteBtn product={product} deleteProduct={deleteProduct} />
                    </div>
                ))}
            </div>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        id='name'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Enter new product name"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <input
                        type="text"
                        id="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder="Enter new product description"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="category">Category</label>
                    <input
                        type="text"
                        id='category'
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        placeholder="Enter new producte category"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="price">Price</label>
                    <input
                        type="number"
                        id="price"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        placeholder="Enter new product price"
                    />
                </div>
                <button type="submit" className="btn btn-primary submit-button">
                    Add Product
                </button>
            </form>
        </div>
    )
}

export default AdminPage;