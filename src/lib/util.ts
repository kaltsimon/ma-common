export const info = (tag: string) => (...values: any[]) => {
  if (process.env.NODE_ENV !== 'production') {
    console.info(`${tag}:`, ...values);
  }
};
