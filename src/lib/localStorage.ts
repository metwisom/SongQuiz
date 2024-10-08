const Storage = (() => {
  return Object.freeze({
    write:
      (key: string, data: string) => {
        if (typeof localStorage !== 'undefined') {
          localStorage.setItem(key, data);
        }
      },
    read:
      (key: string): string | null => {
        if (typeof localStorage !== 'undefined') {
          return localStorage.getItem(key);
        }
        return null;
      },
  })
})()


export {Storage};