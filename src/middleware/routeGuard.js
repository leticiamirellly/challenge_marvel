import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

function ProtectedRoute({ children }) {
	const userAuthenticated = useSelector((state) => state.user.status);

	if (!userAuthenticated) {
		return <Navigate to="/" replace />;
	}

	return children;
}

export default ProtectedRoute;
