
    export type RemoteKeys = 'global_store/store';
    type PackageType<T> = T extends 'global_store/store' ? typeof import('global_store/store') :any;