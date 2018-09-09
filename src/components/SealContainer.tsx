import * as React from 'react';

import {
  ANSWER_ACCEPTED,
  ValidationResult,
  NO_ANSWER_YET,
  HASH_DOESNT_EXIST,
  HASH_INVALID,
  ID_INVALID,
  DB_ERROR,
  ANSWER_REJECTED,
} from '../db-results';
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
  validClassName?: string;
  hoverClassName?: string;
  pendingClassName?: string;
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

  classNameForValidationResult() {
    if (this.state.validationResult) {
      switch (this.state.validationResult.type) {
        case ANSWER_ACCEPTED:
          return this.state.validClassName || 'valid';
        case NO_ANSWER_YET:
          return this.state.pendingClassName || 'pending';
        case DB_ERROR:
        case HASH_INVALID:
        case ID_INVALID:
        case ANSWER_REJECTED:
          return this.state.invalidClassName || 'invalid';
        case HASH_DOESNT_EXIST:
        default:
          return undefined;
      }
    }
    return undefined;
  }

  // TODO: decide based on validationResult
  updateCitationValidity(
    {
      validationResult,
      domElement,
      invalidClassName,
      pendingClassName,
      validClassName,
    }: State = this.state
  ) {
    log(`updateCitationValidity:`, validationResult, domElement);

    removeClass(
      domElement,
      invalidClassName || 'invalid',
      pendingClassName || 'pending',
      validClassName || 'valid'
    );

    const className = this.classNameForValidationResult();
    if (className) {
      addClass(domElement, className);
    }
  }

  onMouseEnter: React.MouseEventHandler<any> = event => {
    addClass(this.state.domElement, this.state.hoverClassName || 'hover');
    if (typeof this.state.onMouseEnter === 'function') {
      this.state.onMouseEnter(event);
    }
  };

  onMouseLeave: React.MouseEventHandler<any> = event => {
    removeClass(this.state.domElement, this.state.hoverClassName || 'hover');
    if (typeof this.state.onMouseLeave === 'function') {
      this.state.onMouseLeave(event);
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
