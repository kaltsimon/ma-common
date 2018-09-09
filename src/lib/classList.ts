/**
 * Get the class list of an element.
 *
 * @param node an element
 */
export const getClassList = (node: Element | null) => node && node.classList;

/**
 * Add an entry to the classList of an element.
 *
 * @param node an element
 * @param className the name of the class to add
 */
export const addClass = (node: Element | null, ...className: string[]) => {
  const classList = getClassList(node);
  if (classList) {
    classList.add(...className);
  }
};

/**
 * Remove an entry from the classList of an element.
 *
 * @param node an element
 * @param className the name of the class to remove
 */
export const removeClass = (node: Element | null, ...className: string[]) => {
  const classList = getClassList(node);
  if (classList) {
    classList.remove(...className);
  }
};
