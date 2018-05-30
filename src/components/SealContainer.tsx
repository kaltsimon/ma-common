import * as React from 'react';

import { ANSWER_ACCEPTED, ValidationResult } from '../db-results';
import { addClass, removeClass } from '../lib/classList';
import { info } from '../lib/util';
import Seal from './Seal';

export interface SealContainerOwnProps {
  hash: string;
  text: string;
  domElement: HTMLElement;
  title?: string | ((props: ValidationResult) => string);
  validationResult?: ValidationResult;
  onMouseEnter?: React.MouseEventHandler<any>;
  onMouseLeave?: React.MouseEventHandler<any>;
  invalidClassName?: string;
  hoverClassName?: string;
  preferState?: boolean;
}

export type SealContainerProps = SealContainerOwnProps;

export type State = SealContainerProps;

const log = info(`[SealContainer`);

export default class SealContainer extends React.PureComponent<
  SealContainerProps,
  State
> {
  constructor(props: SealContainerProps) {
    super(props);
    this.state = props;
  }

  componentDidMount() {
    this.updateCitationValidity();
  }

  componentDidUpdate() {
    if (!this.props.preferState && this.state !== this.props) {
      log(`componentDidUpdate, props changed, setting state`);
      this.setState(this.props);
    }
    this.updateCitationValidity();
  }

  // TODO: decide based on validationResult
  updateCitationValidity(
    { validationResult, domElement, invalidClassName }: State = this.state
  ) {
    log(`updateCitationValidity:`, validationResult, domElement);
    if (validationResult && validationResult.type === ANSWER_ACCEPTED) {
      removeClass(domElement, invalidClassName || 'invalid');
    } else {
      addClass(domElement, invalidClassName || 'invalid');
    }
  }

  onMouseEnter: React.MouseEventHandler<any> = event => {
    addClass(this.state.domElement, this.state.hoverClassName || 'hover');
    if (typeof this.props.onMouseEnter === 'function') {
      this.props.onMouseEnter(event);
    }
  };

  onMouseLeave: React.MouseEventHandler<any> = event => {
    removeClass(this.state.domElement, this.state.hoverClassName || 'hover');
    if (typeof this.props.onMouseLeave === 'function') {
      this.props.onMouseLeave(event);
    }
  };

  render() {
    const { hash, validationResult, title } = this.state;
    return (
      <Seal
        hash={hash}
        validationResult={validationResult}
        onMouseEnter={this.onMouseEnter}
        onMouseLeave={this.onMouseLeave}
        title={title}
      />
    );
  }
}
