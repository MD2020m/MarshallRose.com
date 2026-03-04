import { Navigate } from 'react-router-dom';
import { useAuth } from '../Contexts/AuthContext';

function ProtectedRoute({ children }) {

    const { isAuthenticated } = useAuth();

    console.log(isAuthenticated);

    if (!isAuthenticated) {
        return <Navigate to='/login' replace />;
    }

    return children;
}

export default ProtectedRoute;