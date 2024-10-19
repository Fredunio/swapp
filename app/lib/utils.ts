import { NodeOnDiskFile } from "@remix-run/node";
import { swapTypes } from "./constants";
import { TswapType } from "./types";
import crypto from "crypto";

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

export default function optimizeAvatar(
  imageUrl: string | undefined,
  width: number = 200,
  height: number = 200
) {
  if (!imageUrl) return undefined;

  const params = new URLSearchParams();

  params.set("height", height.toString());
  params.set("width", width.toString());
  params.set("quality", "100");
  params.set("fit", "crop");

  const imageSrc = `${imageUrl}?${params.toString()}`;
  return imageSrc;
}

export function convertRemToPixels(rem: number | string) {
  const remValue = parseFloat(rem.toString());
  if (typeof window === "undefined") {
    return remValue * 16;
  }
  return (
    remValue * parseFloat(getComputedStyle(document.documentElement).fontSize)
  );
}

export function generateImageName(fileType: File["type"]) {
  const fileExtension = fileType.split("/")[1];
  return `${crypto.randomUUID()}.${fileExtension}`;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function debounce<T extends (...args: any[]) => void>(
  func: T,
  delay: number
) {
  let timeoutId: ReturnType<typeof setTimeout>;

  return (...args: Parameters<T>) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
      func(...args);
    }, delay);
  };
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function throttle<T extends (...args: any[]) => void>(
  func: T,
  limit: number
) {
  let lastFunc: ReturnType<typeof setTimeout>;
  let lastRan: number;

  return (...args: Parameters<T>) => {
    if (!lastRan) {
      console.log("1 lastRan: ", lastRan);
      func(...args);
      lastRan = Date.now();
      console.log("2 lastRan: ", lastRan);
    } else {
      clearTimeout(lastFunc);
      lastFunc = setTimeout(() => {
        if (Date.now() - lastRan >= limit) {
          func(...args);
          lastRan = Date.now();
        }
      }, limit - (Date.now() - lastRan));
    }
  };
}

export function isNodeFile(file: unknown): file is NodeOnDiskFile {
  return file instanceof NodeOnDiskFile;
}

export function isNodeFileArray(files: unknown[]): files is NodeOnDiskFile[] {
  return files.every((file) => file instanceof NodeOnDiskFile);
}
