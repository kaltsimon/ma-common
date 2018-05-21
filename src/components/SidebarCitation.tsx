import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { StyledComponentProps } from '@material-ui/core/styles';
import * as React from 'react';

import { ANSWER_ACCEPTED } from '../db-results';
import { CitationState } from '../lib/state';
import { withStylesPure } from '../lib/util';
import Seal from './Seal';

type Props = CitationState & {
  onMouseEnter?: React.MouseEventHandler<any>;
  onMouseLeave?: React.MouseEventHandler<any>;
};

export const VALID_BG_COLOR = 'hsla(120, 100%, 90%, 1)';
export const INVALID_BG_COLOR = 'hsla(0, 90%, 90%, 1)';

const decorate = withStylesPure({
  valid: {
    backgroundColor: VALID_BG_COLOR,
  },
  invalid: {
    backgroundColor: INVALID_BG_COLOR,
  },
  seal: {
    margin: 0,
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
  const sealClasses = { seal: classes.seal };
  return (
    <ListItem
      button
      onMouseEnter={onMouseEnter || (() => {})}
      onMouseLeave={onMouseLeave || (() => {})}
      className={
        hover
          ? validationResult && validationResult.type === ANSWER_ACCEPTED
            ? classes.valid
            : classes.invalid
          : ''
      }
    >
      {/* TODO: more states */}
      <ListItemIcon>
        <Seal
          hash={hash}
          validationResult={validationResult}
          classes={sealClasses}
        />
      </ListItemIcon>
      <ListItemText

      >
        {text}
      </ListItemText>
    </ListItem>
  );
});

export default SidebarCitation;
