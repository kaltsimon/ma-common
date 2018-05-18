import Paper, { PaperProps } from '@material-ui/core/Paper';
import {
  StyledComponentProps,
  WithStyles,
  withStyles,
} from '@material-ui/core/styles';
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

const DefaultPaper = decorate<PaperProps & StyledComponentProps<'paper'>>(
  ({ classes, children, ...rest }: PaperProps & WithStyles<'paper'>) => (
    <Paper className={classes.paper} elevation={4} {...rest}>
      {children}
    </Paper>
  )
);

export default DefaultPaper;
