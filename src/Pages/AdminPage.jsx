import { useAuth } from '../Contexts/AuthContext';
import { Navigate } from 'react-router-dom';
import { deleteProduct } from '../../api-service';
import DeleteBtn from '../Components/DeleteBtn';

function AdminPage({ products }) {


    const { hasRole } = useAuth();

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
        </div>
    )
}

export default AdminPage;