import * as React from 'react';

import { addClass, removeClass } from '../lib/classList';
import { ANSWER_ACCEPTED, ValidationResult } from '../db-results';
import Seal from './Seal';
import { info } from '../lib/util';

export interface SealContainerProps {
  hash: string;
  text: string;
  domElement: HTMLElement;
  validationResult?: ValidationResult;
}

export type State = SealContainerProps;

const log = info(`[SealContainer`);

export default class SealContainer extends React.PureComponent<
  SealContainerProps,
  State
> {
  constructor(props: SealContainerProps) {
    super(props);
    this.state = {
      ...props,
    };
  }

  componentDidMount() {
    this.updateCitationValidity();
  }

  componentDidUpdate() {
    if (this.state !== this.props) {
      log(`componentDidUpdate, props changed, setting state`);
      this.setState(this.props);
    }
    this.updateCitationValidity();
  }

  // TODO: decide based on validationResult
  updateCitationValidity({ validationResult, domElement }: State = this.state) {
    log(`updateCitationValidity:`, validationResult, domElement);
    if (validationResult && validationResult.type === ANSWER_ACCEPTED) {
      removeClass(domElement, 'invalid');
    } else {
      addClass(domElement, 'invalid');
    }
  }

  onMouseEnter = () => {
    addClass(this.state.domElement, `hover`);
  };

  onMouseLeave = () => {
    removeClass(this.state.domElement, `hover`);
  };

  render() {
    const { hash, validationResult } = this.state;
    return (
      <Seal
        hash={hash}
        validationResult={validationResult}
        onMouseEnter={this.onMouseEnter}
        onMouseLeave={this.onMouseLeave}
      />
    );
  }
}