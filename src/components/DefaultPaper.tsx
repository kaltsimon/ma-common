import Paper from '@material-ui/core/Paper';
import { StyledComponentProps, withStyles } from '@material-ui/core/styles';
import * as React from 'react';
import { pure } from 'recompose';

const decorate = withStyles(theme => ({
  paper: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    marginTop: theme.spacing.unit * 3,
    textAlign: 'justify',
    position: 'relative',
  }),
}));

export { StyledComponentProps };

const DefaultPaper = pure(
  decorate(({ classes, children }) => (
    <Paper className={classes.paper} elevation={4}>
      {children}
    </Paper>
  ))
);

export default DefaultPaper;
