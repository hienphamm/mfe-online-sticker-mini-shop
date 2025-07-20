import { createModuleFederationConfig } from '@module-federation/enhanced/rspack';

export default createModuleFederationConfig({
    name: 'product',
    exposes: {
        './HelloWorld': './src/components/main.ts',
    },
    shared: {},
    dts: false
});