import { StyledComponentProps } from '@material-ui/core/styles';
import {
  ErrorOutline,
  HourglassEmpty,
  NotInterested,
  VerifiedUser,
} from '@material-ui/icons';
import * as classNames from 'classnames';
import * as React from 'react';

import {
  ANSWER_ACCEPTED,
  ANSWER_REJECTED,
  HASH_DOESNT_EXIST,
  HASH_INVALID,
  ID_INVALID,
  NO_ANSWER_YET,
  ValidationResult,
} from '../db-results';
import { withStylesPure } from '../lib/util';

export interface SealIconProps {
  validationResult?: ValidationResult;
  className?: string;
  onMouseEnter?: React.MouseEventHandler<any>;
  onMouseLeave?: React.MouseEventHandler<any>;
  title?: string;
}

export { StyledComponentProps };

const decorator = withStylesPure(theme => ({
  root: {
    fontSize: 18,
  },
  valid: {
    color: (theme.seal && theme.seal.valid) || 'hsla(120, 90%, 30%, 1)',
  },
  invalid: {
    color: (theme.seal && theme.seal.invalid) || 'hsla(0, 100%, 70%, 1)',
  },
  indeterminate: {
    color: (theme.seal && theme.seal.indeterminate) || 'rgba(0, 0, 0, 0.54)',
  },
}));

const SealIcon = decorator<SealIconProps>(
  ({ validationResult, classes, className: _, ...rest }) => {
    if (!validationResult) {
      return null;
    }

    const className = classNames(classes.root, {
      [classes.valid]: validationResult.type === ANSWER_ACCEPTED,
      [classes.invalid]:
        [ANSWER_REJECTED, ID_INVALID, HASH_INVALID].indexOf(
          validationResult.type
        ) !== -1,
      [classes.indeterminate]: validationResult.type === NO_ANSWER_YET,
    });

    switch (validationResult.type) {
      case ANSWER_ACCEPTED:
        return <VerifiedUser className={className} {...rest} />;
      case ID_INVALID:
      case HASH_INVALID:
        return <ErrorOutline className={className} {...rest} />;
      case NO_ANSWER_YET:
        return <HourglassEmpty className={className} {...rest} />;
      case ANSWER_REJECTED:
        return <NotInterested className={className} {...rest} />;
      case HASH_DOESNT_EXIST:
      default:
        return null;
    }
  }
);

export default SealIcon;
