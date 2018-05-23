import { ANSWER_ACCEPTED, Sidebar } from 'ma-common';
import React, { Component } from 'react';

export default class App extends Component {
  state = {
    domElement: null,
    hover: false,
  };

  hoverIn = () =>
    this.setState(() => ({
      hover: true,
    }));
  hoverOut = () =>
    this.setState(() => ({
      hover: false,
    }));

  render() {
    return (
      <Sidebar
        windowId={0}
        tabId={0}
        citations={{
          ID: {
            id: 'ID',
            hash: 'pqeihpwoen',
            text: 'My beautiful text',
            valid: true,
            validationResult: {
              type: ANSWER_ACCEPTED,
              id: 'ID',
              requestTimestamp: new Date().toJSON(),
              responseTimestamp: new Date().toJSON(),
            },
            hover: this.state.hover,
          },
        }}
        enterCitation={this.hoverIn}
        leaveCitation={this.hoverOut}
        title={result => result.type}
      />
    );
  }
}
