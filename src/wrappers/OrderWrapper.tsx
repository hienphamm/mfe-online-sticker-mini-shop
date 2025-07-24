import { useEffect, useRef } from 'react';

const OrderWrapper = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        import('order/OrderApp').then(module => {
            module.mountOrderApp(containerRef.current!);
        });
    }, []);

    return <div ref={containerRef} />;
};

export default OrderWrapper;
