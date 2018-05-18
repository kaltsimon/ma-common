import * as React from 'react';
import withStyles, {
  StyledComponentProps,
} from '@material-ui/core/styles/withStyles';

import { CitationState } from '../lib/state';
import Seal from './Seal';
import { ANSWER_ACCEPTED } from '../db-results';

type Props = CitationState & {
  onMouseEnter?: React.MouseEventHandler<any>;
  onMouseLeave?: React.MouseEventHandler<any>;
};

export const VALID_BG_COLOR = 'hsla(120, 100%, 90%, 1)';
export const INVALID_BG_COLOR = 'hsla(0, 90%, 90%, 1)';

const decorate = withStyles({
  valid: {
    backgroundColor: VALID_BG_COLOR,
  },
  invalid: {
    backgroundColor: INVALID_BG_COLOR,
  },
});

export { StyledComponentProps };

const SidebarCitation = decorate<Props>(
  ({
    hash,
    text,
    validationResult,
    hover,
    onMouseEnter,
    onMouseLeave,
    classes,
  }) => (
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
      <Seal hash={hash} validationResult={validationResult} />
    </li>
  )
);

export default SidebarCitation;
