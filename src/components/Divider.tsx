import MUIDivider from '@material-ui/core/Divider';
import { StyledComponentProps, withStyles } from '@material-ui/core/styles';
import * as React from 'react';
import { pure } from 'recompose';

const decorate = withStyles(theme => ({
  divider: {
    marginBottom: theme.spacing.unit,
    marginTop: theme.spacing.unit,
  },
}));

export { StyledComponentProps };

const Divider = decorate(({ classes }) => (
  <MUIDivider className={classes.divider} />
));

export default pure(Divider);
