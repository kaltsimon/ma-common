import React, { Component } from 'react';

import { SealContainer } from 'ma-common';

export default class App extends Component {
  state = {
    domElement: null,
  };

  render() {
    return (
      <div>
        <span
          x-cite-d="Abcdefg"
          ref={domElement =>
            domElement &&
            !this.state.domElement &&
            this.setState({ domElement })
          }
        >
          Test text
        </span>
        <SealContainer
          hash="Abcdefg"
          text="Test text"
          domElement={this.state.domElement}
          validationResult={{ type: 'ID_INVALID', id: 'a' }}
        />
      </div>
    );
  }
}
