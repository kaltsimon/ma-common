import MUIDivider, { DividerProps } from 'material-ui/Divider';
import {
  WithStyles,
  withStyles,
  StyledComponentProps,
} from 'material-ui/styles';
import * as React from 'react';
import { pure } from 'recompose';

const decorate = withStyles(theme => ({
  divider: {
    marginBottom: theme.spacing.unit,
    marginTop: theme.spacing.unit,
  },
}));

export { StyledComponentProps };

const Divider = decorate(
  ({ classes, ...rest }: DividerProps & WithStyles<'divider'>) => (
    <MUIDivider className={classes.divider} {...rest} />
  )
);

export default pure(Divider);
