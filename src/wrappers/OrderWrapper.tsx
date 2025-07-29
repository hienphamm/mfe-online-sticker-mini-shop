import {useEffect, useRef, useState} from 'react';
import ErrorBoundaryFallback from "../components/ErrorBoundaryFallback.tsx";

const OrderWrapper = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [hasError, setHasError] = useState(false);

    useEffect(() => {
        const load = async () => {
            try {
                const module = await import('order/OrderApp');
                module.mountOrderApp(containerRef.current!);
            } catch (error) {
                console.error('Error loading OrderApp:', error);
                setHasError(true)
            }
        }

        load();
    }, []);

    if (hasError) {
        return <ErrorBoundaryFallback/>;
    }

    return <div ref={containerRef}/>;
};

export default OrderWrapper;
