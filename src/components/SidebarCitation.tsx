import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { StyledComponentProps } from '@material-ui/core/styles';
import * as React from 'react';

import { ANSWER_ACCEPTED, ValidationResult } from '../db-results';
import { CitationState } from '../lib/state';
import { withStylesPure } from '../lib/util';
import Seal from './Seal';

type Props = CitationState & {
  onMouseEnter?: React.MouseEventHandler<any>;
  onMouseLeave?: React.MouseEventHandler<any>;
  title?: string;
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

const getDefaultTitle = (
  titleProp?: string,
  validationResult?: ValidationResult
) =>
  titleProp ||
  `Zitatstatus: ${(validationResult && validationResult.type) || 'unbekannt'}.`;

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
    title,
  } = props;
  const sealClasses = { seal: classes.seal };
  return (
    <ListItem
      onMouseEnter={onMouseEnter || (() => {})}
      onMouseLeave={onMouseLeave || (() => {})}
      className={
        hover
          ? validationResult && validationResult.type === ANSWER_ACCEPTED
            ? classes.valid
            : classes.invalid
          : ''
      }
      title={getDefaultTitle(title)}
    >
      <ListItemIcon>
        <Seal
          hash={hash}
          validationResult={validationResult}
          classes={sealClasses}
          title=""
        />
      </ListItemIcon>
      <ListItemText>{text}</ListItemText>
    </ListItem>
  );
});

export default SidebarCitation;
