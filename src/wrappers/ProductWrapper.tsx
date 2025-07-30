import {useEffect, useRef, useState} from 'react';
import ErrorBoundaryFallback from '../components/ErrorBoundaryFallback';

const ProductWrapper = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [hasError, setHasError] = useState(false);

    useEffect(() => {
        let unmount: (() => void) | undefined;
        const load = async () => {
            try {
                const {mount} = await import('product/App');
                if (typeof mount === 'function' && containerRef.current) {
                    unmount = mount(containerRef.current, {
                        currentPath: location.pathname
                    });
                } else {
                    throw new Error('mount function not found');
                }
            } catch (err) {
                console.error('Error loading Vue MFE:', err);
                setHasError(true);
            }
        };

        load();

        return () => {
            if (unmount) {
                unmount();
            }
        };
    }, []);

    if (hasError) {
        return <ErrorBoundaryFallback/>;
    }

    return <div ref={containerRef}/>;
};

export default ProductWrapper;
