import { useEffect, useState } from "react";

const useLocalStorage = (key: string, defaultValue?: any) => {
  const [data, setData] = useState(() => getInitialValue(key, defaultValue));

  useEffect(() => {
    const stringifiedData = JSON.stringify(data);
    localStorage.setItem(key, stringifiedData);
  }, [key, data]);

  return [data, setData];
};

const getInitialValue = (key: string, defaultValue?: any) => {
  const valueInLocalStorage = localStorage.getItem(key);
  if (valueInLocalStorage) {
    try {
      return JSON.parse(valueInLocalStorage);
    } catch (error) {
      // localStorage value was not valid JSON, use defaultValue instead
    }
  }
  return returnAllTypesOfValue(defaultValue);
};

const returnAllTypesOfValue = (defaultValue?: any) => {
  if (defaultValue === undefined) {
    return null;
  } else if (defaultValue instanceof Function) {
    return defaultValue();
  } else {
    return defaultValue;
  }
};

export default useLocalStorage;
