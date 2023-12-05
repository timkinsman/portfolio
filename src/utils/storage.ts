/* eslint-disable @typescript-eslint/no-explicit-any */

export const storagePrefix = 'portfolio_';

export enum Storage {
  theme = 'theme',
}

const storage = {
  getItem: (key: Storage) => {
    return JSON.parse(window.localStorage.getItem(`${storagePrefix}${key}`) as string);
  },
  setItem: (key: Storage, value: any) => {
    window.localStorage.setItem(`${storagePrefix}${key}`, JSON.stringify(value));
  },
  removeItem: (key: Storage) => {
    window.localStorage.removeItem(`${storagePrefix}${key}`);
  },
};

export default storage;
