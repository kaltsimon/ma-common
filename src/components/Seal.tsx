import withStyles, {
  StyledComponentProps,
} from 'material-ui/styles/withStyles';
import * as React from 'react';
import { pure } from 'recompose';

import { ValidationResult } from '../db-results';
import SealIcon from './SealIcon';

export interface SealProps {
  hash: string;
  validationResult?: ValidationResult;
  onMouseEnter?: React.MouseEventHandler<any>;
  onMouseLeave?: React.MouseEventHandler<any>;
}

const decorate = withStyles({
  seal: {
    float: 'right' as 'right',
    margin: '0.5em 0 0 0.5em',
    display: 'block',
  },
});

export { StyledComponentProps };

const Seal = decorate<SealProps>(
  pure(
    ({ /* hash, */ validationResult, classes, onMouseEnter, onMouseLeave }) => {
      if (!validationResult) {
        return null;
      }

      return (
        <span
          onMouseEnter={onMouseEnter || (() => {})}
          onMouseLeave={onMouseLeave || (() => {})}
          title={`Zitatstatus: ${(validationResult && validationResult.type) ||
            'unbekannt'}.`}
          className={classes.seal}
        >
          <SealIcon validationResult={validationResult} />
        </span>
      );
    }
  )
);

export default Seal;
