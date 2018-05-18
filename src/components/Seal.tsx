import { StyledComponentProps, withStyles } from '@material-ui/core/styles';
import * as React from 'react';
import { pure } from 'recompose';

import { SealIconColors } from '../../dist/components/SealIcon';
import { ValidationResult } from '../db-results';
import SealIcon, { extractColors } from './SealIcon';

export interface SealOwnProps {
  hash: string;
  validationResult?: ValidationResult;
  onMouseEnter?: React.MouseEventHandler<any>;
  onMouseLeave?: React.MouseEventHandler<any>;
}

export type SealProps = SealOwnProps & Partial<SealIconColors>;

const decorate = withStyles({
  seal: {
    float: 'right' as 'right',
    margin: '0.5em 0 0 0.5em',
    display: 'block',
  },
});

export { StyledComponentProps };

const Seal = decorate<SealProps>(
  pure(props => {
    const {
      /* hash, */
      validationResult,
      classes,
      onMouseEnter,
      onMouseLeave,
    } = props;
    if (!validationResult) {
      return null;
    }

    const { colors } = extractColors(props);

    return (
      <span
        onMouseEnter={onMouseEnter || (() => {})}
        onMouseLeave={onMouseLeave || (() => {})}
        title={`Zitatstatus: ${(validationResult && validationResult.type) ||
          'unbekannt'}.`}
        className={classes.seal}
      >
        <SealIcon validationResult={validationResult} {...colors} />
      </span>
    );
  })
);

export default Seal;
