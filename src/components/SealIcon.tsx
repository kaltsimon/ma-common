import { WithStyles, withStyles } from '@material-ui/core/styles';
import { StyledComponentProps } from '@material-ui/core/styles/withStyles';
import {
  ErrorOutline,
  HourglassEmpty,
  NotInterested,
  VerifiedUser,
} from '@material-ui/icons';
import * as React from 'react';
import {
  ComponentEnhancer,
  compose,
  defaultProps,
  Omit,
  pure,
} from 'recompose';

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

export interface SealIconColors {
  validColor: string;
  invalidColor: string;
  indeterminateColor: string;
}

const defaultColors: SealIconColors = {
  validColor: 'hsla(120, 90%, 30%, 1)',
  invalidColor: 'hsla(0, 100%, 70%, 1)',
  indeterminateColor: '#cccccc',
};

export function extractColors<T extends Partial<SealIconColors>>(
  props: T
): { colors: Partial<SealIconColors>; rest: Omit<T, keyof SealIconColors> } {
  const {
    validColor,
    invalidColor,
    indeterminateColor,
    ...rest
  } = props as SealIconColors & object;
  return {
    colors: {
      validColor,
      invalidColor,
      indeterminateColor,
    },
    rest: rest as Omit<T, keyof SealIconColors>,
  };
}

const decorator = withStyles({
  root: {
    fontSize: 18,
  },
});

const hoc: ComponentEnhancer<
  SealIconProps & SealIconColors & WithStyles<'root'>,
  SealIconProps & Partial<SealIconColors> & StyledComponentProps<'root'>
> = compose(pure, decorator, defaultProps(defaultColors));

const SealIcon = hoc(
  ({
    validationResult,
    classes,
    validColor,
    invalidColor,
    indeterminateColor,
  }) => {
    if (!validationResult) {
      return null;
    }

    switch (validationResult.type) {
      case ANSWER_ACCEPTED:
        return (
          <VerifiedUser className={classes.root} nativeColor={validColor} />
        );
      case ID_INVALID:
      case HASH_INVALID:
        return (
          <ErrorOutline className={classes.root} nativeColor={invalidColor} />
        );
      case NO_ANSWER_YET:
        return (
          <HourglassEmpty
            className={classes.root}
            nativeColor={indeterminateColor}
          />
        );
      case ANSWER_REJECTED:
        return (
          <NotInterested className={classes.root} nativeColor={invalidColor} />
        );
      case HASH_DOESNT_EXIST:
      default:
        return null;
    }
  }
);

export default SealIcon;
