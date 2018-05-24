import { Grid } from '@material-ui/core';
import React, { Component } from 'react';

import SidebarMockup from './SidebarMockup';

export default class App extends Component {
  render() {
    return (
      <Grid container={true} wrap="nowrap">
        <SidebarMockup />
      </Grid>
    );
  }
}
