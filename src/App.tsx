import React from 'react';
import ProductWrapper from "./wrappers/ProductWrapper.tsx";
import { defineCustomElements } from 'mfe-ui-kit/loader';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import OrderWrapper from "./wrappers/OrderWrapper.tsx";
defineCustomElements()
function App() {
	return (
		<React.Suspense fallback={<div>Loading...</div>}>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<>My Home Page</>} />
					<Route path="/order" element={<OrderWrapper />} />
					<Route path="/product/:id" element={<ProductWrapper />} />
					<Route path="*" element={<div>404 not found</div>} />
				</Routes>
			</BrowserRouter>
		</React.Suspense>
	);
}

export default App;