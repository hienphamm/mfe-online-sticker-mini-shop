import { useEffect, useRef } from 'react';

const VueWrapper = () => {
    const ref = useRef(null);

    useEffect(() => {
        import('product/HelloWorld');
    }, []);

    // @ts-ignore
    return <hello-world msg="Hello from React" ref={ref} />;
};

export default VueWrapper;
