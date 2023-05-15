import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Authentication from './views/Authentication.jsx';
import Characters from './views/Characters.jsx';
import ProtectedRoute from './middleware/routeGuard.js';
import Character from './views/Character.jsx';

function App() {
	return (
		<Routes>
			<Route path="/" element={<Authentication />} />;
			<Route
				path="/characters"
				element={
					<ProtectedRoute>
						<Characters />
					</ProtectedRoute>
				}
			/>
			<Route
				path="characters/:characterId"
				element={
					<ProtectedRoute>
						<Character />
					</ProtectedRoute>
				}
			/>
		</Routes>
	);
}

export default App;
