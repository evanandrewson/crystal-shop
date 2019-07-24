const store = {
    storage: window.localStorage,
    save(key, object) {
        const json = JSON.stringify(object);
        store.storage.setItem(key, json); 
    },
    get(key) {
        const json = store.storage.getItem(key);
        const object = JSON.parse(json);
        return object;
    }
};

export default store;