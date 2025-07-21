import React from 'react';
import VueWrapper from "./wrappers/VueWrapper.tsx";
import { defineCustomElements } from 'mfe-ui-kit/loader';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
defineCustomElements()
function App() {
	return (
		<React.Suspense fallback={<div>Loading...</div>}>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<>My Home Page</>} />
					<Route path="/product/:id" element={<VueWrapper />} />
					<Route path="*" element={<div>404 not found</div>} />
					{/*<Route path="/order/*" element={<OrderWrapper />} />*/}
				</Routes>
			</BrowserRouter>
		</React.Suspense>
	);
}

export default App;