import { createModuleFederationConfig } from '@module-federation/enhanced/rspack';

const isProd = process.env.NODE_ENV === 'production';

export default createModuleFederationConfig({
    name: 'shell',
    remotes: {
        order: `order@${isProd ? 'https://mfe-angular-order.vercel.app' : 'http://localhost:4200'}/remoteEntry.js`,
        product: `product@${isProd ? 'https://mfe-vue-product.vercel.app' : 'http://localhost:8082'}/mf-manifest.json`,
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
        '@angular/core': {
            singleton: true,
            eager: false,
            requiredVersion: false
        },
        '@angular/common': {
            singleton: true,
            eager: false,
            requiredVersion: false
        },
        '@angular/platform-browser': {
            singleton: true,
            eager: false,
            requiredVersion: false
        },
        '@angular/elements': {
            singleton: true,
            eager: false,
            requiredVersion: false
        },
        // Zone.js is required for Angular
        'zone.js': {
            singleton: true,
            eager: false,
            requiredVersion: false
        }
    },
});
