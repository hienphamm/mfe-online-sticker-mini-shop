import { createModuleFederationConfig } from '@module-federation/enhanced/rspack';

export default createModuleFederationConfig({
    name: 'shell',
    remotes: {
        order: 'order@http://localhost:8080/mf-manifest.json',
        product: 'product@http://localhost:8082/mf-manifest.json',
    },
    exposes: {},
    shared: {
        react: {
            singleton: true,
            eager: true,
            requiredVersion: false,
        },
        'react-dom': {
            singleton: true,
            eager: true,
            requiredVersion: false,
        },
    },
});