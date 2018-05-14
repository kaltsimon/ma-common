import {
  ErrorOutline,
  HourglassEmpty,
  NotInterested,
  VerifiedUser,
} from '@material-ui/icons';
import { withStyles } from 'material-ui';
import { StyledComponentProps, WithStyles } from 'material-ui/styles';
import * as React from 'react';
import { pure } from 'recompose';

import {
  ANSWER_ACCEPTED,
  ANSWER_REJECTED,
  HASH_DOESNT_EXIST,
  HASH_INVALID,
  ID_INVALID,
  NO_ANSWER_YET,
  ValidationResult,
} from '../db-results';

export interface SealIconProps {
  validationResult?: ValidationResult;
}

const colors = {
  valid: 'hsla(120, 90%, 30%, 1)',
  invalid: 'hsla(0, 100%, 70%, 1)',
  indeterminate: '#cccccc',
};

const decorator = withStyles({
  root: {
    fontSize: 18,
  },
});

export { StyledComponentProps };
const SealIcon = pure(
  decorator(
    ({ validationResult, classes }: SealIconProps & WithStyles<'root'>) => {
      if (!validationResult) {
        return null;
      }

      switch (validationResult.type) {
        case ANSWER_ACCEPTED:
          return (
            <VerifiedUser className={classes.root} nativeColor={colors.valid} />
          );
        case ID_INVALID:
        case HASH_INVALID:
          return (
            <ErrorOutline
              className={classes.root}
              nativeColor={colors.invalid}
            />
          );
        case NO_ANSWER_YET:
          return (
            <HourglassEmpty
              className={classes.root}
              nativeColor={colors.indeterminate}
            />
          );
        case ANSWER_REJECTED:
          return (
            <NotInterested
              className={classes.root}
              nativeColor={colors.invalid}
            />
          );
        case HASH_DOESNT_EXIST:
        default:
          return null;
      }
    }
  )
);

export default SealIcon;
