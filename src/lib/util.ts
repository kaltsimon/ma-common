import { withStyles } from '@material-ui/core/styles';
import { compose, pure } from 'recompose';

export const info = (tag: string) => (...values: any[]) => {
  if (process.env.NODE_ENV !== 'production') {
    console.info(`${tag}:`, ...values);
  }
};

export const withStylesPure: typeof withStyles = (style, options) => {
  return compose(withStyles(style, options), pure);
};
