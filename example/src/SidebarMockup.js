import Grid from '@material-ui/core/Grid';
import { ANSWER_ACCEPTED, Sidebar, withStylesPure } from 'ma-common';
import React, { PureComponent } from 'react';

import Header from './Header';

const decorate = withStylesPure(theme => ({
  root: {
    background: '#F6F6F6',
    height: '100vh',
    borderRight: '#DFDFDF 1px solid',
    width: 250,
    fontFamily: theme.typography.fontFamily,
    fontSize: theme.typography.fontSize,
    fontWeight: theme.typography.fontWeightRegular,
  },
  listRoot: {
    marginTop: 47,
    height: 'calc(100% - 47px)',
    overflow: 'auto',
  },
}));

const CITATIONS = {};
new Array(10).fill(null).forEach((_, index) => {
  CITATIONS[`ID${index}`] = {
    id: `ID${index}`,
    hash: 'pqeihpwoen',
    text: `My beautiful text ${index}`,
    valid: true,
    validationResult: {
      type: ANSWER_ACCEPTED,
      id: 'ID',
      requestTimestamp: new Date().toJSON(),
      responseTimestamp: new Date().toJSON(),
    },
  };
});

class SidebarMockup extends PureComponent {
  state = {
    domElement: null,
    citations: CITATIONS,
  };

  hoverIn = ({ id }) =>
    this.setState(({ citations }) => ({
      citations: {
        ...citations,
        [id]: {
          ...citations[id],
          hover: true,
        },
      },
    }));
  hoverOut = ({ id }) =>
    this.setState(({ citations }) => ({
      citations: {
        ...citations,
        [id]: {
          ...citations[id],
          hover: false,
        },
      },
    }));

  render() {
    const { classes } = this.props;
    return (
      <Grid item={true} className={classes.root}>
        <Header />
        <Sidebar
          windowId={0}
          tabId={0}
          classes={{ listRoot: classes.listRoot }}
          citations={this.state.citations}
          enterCitation={this.hoverIn}
          leaveCitation={this.hoverOut}
          title={result => result.type}
        />
      </Grid>
    );
  }
}

export default decorate(SidebarMockup);
