import { swapTypes } from "./constants";
import { TswapType } from "./types";

export function saveToSessionStorage(key: string, value: unknown) {
  try {
    sessionStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    console.error(e);
  }
}
export function loadFromSessionStorage(key: string) {
  try {
    const value = sessionStorage.getItem(key);
    return value ? JSON.parse(value) : undefined;
  } catch (e) {
    console.error(e);
    return undefined;
  }
}

export function checkIfSwapType(type: string) {
  if (swapTypes.includes(type as TswapType)) {
    return type as TswapType;
  }
  return undefined;
}
