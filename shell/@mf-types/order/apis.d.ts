
    export type RemoteKeys = 'order/Button';
    type PackageType<T> = T extends 'order/Button' ? typeof import('order/Button') :any;