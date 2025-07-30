import React from 'react';
import {defineCustomElements} from 'mfe-ui-kit/loader';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import './styles.css';
import Shell from "./wrappers/Shell.tsx";
import ProductWrapper from "./wrappers/ProductWrapper.tsx";

defineCustomElements();

const OrderWrapperLazy = React.lazy(() => import('./wrappers/OrderWrapper.tsx'));

function App() {
    return (
        <React.Suspense fallback={<div>Loading...</div>}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Shell/>}>
                        <Route index element={<ProductWrapper/>}/>
                        <Route path="new" element={<ProductWrapper/>}/>
                        <Route path="best" element={<ProductWrapper/>}/>
                        <Route path="product" element={<ProductWrapper/>}/>
                        <Route path="product/:id" element={<ProductWrapper/>}/>
                        <Route path="cart" element={<OrderWrapperLazy/>}/>
                        <Route path="*" element={<div>404 not found</div>}/>
                    </Route>
                </Routes>
            </BrowserRouter>
        </React.Suspense>
    );
}

export default App;
