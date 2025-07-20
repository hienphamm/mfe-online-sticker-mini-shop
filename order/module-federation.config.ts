import { createModuleFederationConfig } from '@module-federation/enhanced/rspack';

export default createModuleFederationConfig({
    name: 'order',
    exposes: {
        './Button': './src/components/Button.tsx',
    },
    shared: {
        react: {
            singleton: true,
            eager: false,
            requiredVersion: false,
        },
        'react-dom': {
            singleton: true,
            eager: false,
            requiredVersion: false,
        },
    },
});