import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import VerifiedUser from '@material-ui/icons/VerifiedUser';
import { withStylesPure } from 'ma-common';
import React from 'react';

const decorate = withStylesPure(theme => ({
  heading: {
    fontSize: '1rem',
    fontWeight: theme.typography.fontWeightLight,
  },
  wrapper: {
    height: 47,
    borderBottom: '#dedede 1px solid',
    paddingLeft: 12,
    width: 253,
    position: 'fixed',
    background: '#f6f6f6',
    zIndex: 1,
  },
  icon: {
    fontSize: 18,
    marginTop: 2,
  },
}));

const Header = decorate(({ classes }) => (
  <Grid
    container={true}
    alignItems="center"
    spacing={8}
    className={classes.wrapper}
  >
    <Grid item={true}>
      <VerifiedUser className={classes.icon} />
    </Grid>
    <Grid item={true}>
      <Typography component="h2" className={classes.heading}>
        Citation Validator
      </Typography>
    </Grid>
  </Grid>
));

export default Header;
