export const isElement = (value) => value instanceof HTMLElement;

export const getElement = (value) => isElement(value) ? value : document.querySelector(value);
