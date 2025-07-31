import {createModuleFederationConfig} from '@module-federation/enhanced/rspack';

const isProd = process.env.NODE_ENV === 'production';

export default createModuleFederationConfig({
    name: 'shell',
    remotes: {
        order: `order@${isProd ? 'https://mfe-angular-order.vercel.app' : 'http://localhost:4200'}/remoteEntry.js`,
        product: `product@${isProd ? 'https://mfe-vue-product.vercel.app' : 'http://localhost:8082'}/mf-manifest.json`,
        global_store: `global_store@${isProd ? 'https://mfe-global-store.vercel.app' : 'http://localhost:3000'}/mf-manifest.json`,
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
        'react-router-dom': {
            singleton: true,
            eager: true,
            requiredVersion: false,
        },
        'mfe-ui-kit': {singleton: true, requiredVersion: '0.0.5'},
        rxjs: {
            singleton: true
        }
    },
});
