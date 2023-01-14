const writeToCache = (key, data) =>
  localStorage.setItem(key, JSON.stringify(data));

const readFromCache = (key) => JSON.parse(localStorage.getItem(key)) || null;

const clearCache = () => localStorage.clear();

export { readFromCache, writeToCache, clearCache };
