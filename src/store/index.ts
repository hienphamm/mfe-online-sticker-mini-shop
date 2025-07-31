let sharedStore: any = null;

export async function initSharedState() {
    if (!sharedStore) {
        sharedStore = await import('global_store/store');
    }
    return sharedStore;
}
