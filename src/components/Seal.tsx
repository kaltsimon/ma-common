import { StyledComponentProps, withStyles } from '@material-ui/core/styles';
import * as React from 'react';
import { pure } from 'recompose';

import { ValidationResult } from '../db-results';
import SealIcon from './SealIcon';

export interface SealOwnProps {
  hash: string;
  validationResult?: ValidationResult;
  onMouseEnter?: React.MouseEventHandler<any>;
  onMouseLeave?: React.MouseEventHandler<any>;
  title?: string;
  className?: string;
}

export type SealProps = SealOwnProps;

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
      hash: _,
      validationResult,
      classes,
      title: titleProp,
      onMouseEnter,
      onMouseLeave,
      ...rest
    } = props;
    if (!validationResult) {
      return null;
    }
    // const { colors } = extractColors(props);

    const title =
      titleProp ||
      `Zitatstatus: ${(validationResult && validationResult.type) ||
        'unbekannt'}.`;

    return (
      <span
        onMouseEnter={onMouseEnter || (() => {})}
        onMouseLeave={onMouseLeave || (() => {})}
        title={title}
        className={classes.seal}
      >
        <SealIcon validationResult={validationResult} {...rest} />
      </span>
    );
  })
);

export default Seal;
