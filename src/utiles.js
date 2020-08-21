export function getAllStorageData() {
    const values = [];
    const keys = Object.keys(localStorage);
    let i = keys.length;

    while (i--) {
        values.push(localStorage.getItem(keys[i]));
    }

    return values.map((item) => JSON.parse(item));
}