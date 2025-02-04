export const getValueFromLocalStorage = (key: string) =>
  window.localStorage.getItem(key);

export const setValueInLocalStorage = (key: string, value: string) =>
  window.localStorage.setItem(key, value);

export const deleteValueFromLocalStorage = (key: string) =>
  window.localStorage.removeItem(key);

export const waitForSomeTime = (timeout: number) =>
  new Promise((resolve, reject) =>
    setTimeout(() => {
      resolve("Done");
    }, timeout)
  );
