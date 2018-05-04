import Paper from 'material-ui/Paper';
import { StyledComponentProps, withStyles } from 'material-ui/styles';
import * as React from 'react';

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

const DefaultPaper = decorate<{}>(({ classes, children }) => (
  <Paper className={classes.paper} elevation={4}>
    {children}
  </Paper>
));

export default DefaultPaper;
