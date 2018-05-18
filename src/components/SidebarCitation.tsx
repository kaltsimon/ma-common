import { StyledComponentProps } from '@material-ui/core/styles';
import * as React from 'react';

import { withStylesPure } from '..';
import { SealIconColors } from '../../dist/components/SealIcon';
import { ANSWER_ACCEPTED } from '../db-results';
import { CitationState } from '../lib/state';
import Seal from './Seal';
import { extractColors } from './SealIcon';

type Props = CitationState & {
  onMouseEnter?: React.MouseEventHandler<any>;
  onMouseLeave?: React.MouseEventHandler<any>;
} & Partial<SealIconColors>;

export const VALID_BG_COLOR = 'hsla(120, 100%, 90%, 1)';
export const INVALID_BG_COLOR = 'hsla(0, 90%, 90%, 1)';

const decorate = withStylesPure({
  valid: {
    backgroundColor: VALID_BG_COLOR,
  },
  invalid: {
    backgroundColor: INVALID_BG_COLOR,
  },
});

export { StyledComponentProps };

const SidebarCitation = decorate<Props>(props => {
  const {
    hash,
    text,
    validationResult,
    hover,
    onMouseEnter,
    onMouseLeave,
    classes,
  } = props;
  const { colors } = extractColors(props);
  return (
    <li
      onMouseEnter={onMouseEnter || (() => {})}
      onMouseLeave={onMouseLeave || (() => {})}
    >
      {/* TODO: more states */}
      <span
        className={
          hover
            ? validationResult && validationResult.type === ANSWER_ACCEPTED
              ? classes.valid
              : classes.invalid
            : ''
        }
      >
        {text}
      </span>
      <Seal hash={hash} validationResult={validationResult} {...colors} />
    </li>
  );
});

export default SidebarCitation;
