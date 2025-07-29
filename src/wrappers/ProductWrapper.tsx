import {useEffect, useRef, useState} from 'react';
import ErrorBoundaryFallback from '../components/ErrorBoundaryFallback';

const ProductWrapper = () => {
    const ref = useRef(null);
    const [hasError, setHasError] = useState(false);

    useEffect(() => {
        const load = async () => {
            try {
                await import('product/HelloWorld');
            } catch (err) {
                setHasError(true);
            }
        };
        load();
    }, []);

    if (hasError) {
        return <ErrorBoundaryFallback/>;
    }

    // @ts-ignore
    return <hello-world msg="Hello from Shell" ref={ref}/>;
};

export default ProductWrapper;
