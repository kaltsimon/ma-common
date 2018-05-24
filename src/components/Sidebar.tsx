import 'core-js/fn/object/values';

import List from '@material-ui/core/List';
import { StyledComponentProps } from '@material-ui/core/styles';
import * as React from 'react';

import { ValidationResult } from '../db-results';
import { CitationListState, CitationState } from '../lib/state';
import { withStylesPure } from '../lib/util';
import SidebarCitation from './SidebarCitation';

export type EventHandlerData = CitationState & {
  windowId: number;
  tabId: number;
};

export type EventHandler = (data: EventHandlerData) => any;

export interface ISidebarBaseProps {
  citations: CitationListState;
  windowId: number;
  tabId: number;
}

export interface ISidebarProps extends ISidebarBaseProps {
  enterCitation: EventHandler;
  leaveCitation: EventHandler;
  title?: string | ((result?: ValidationResult) => string);
}

export interface IChildrenProp {
  children: React.ReactNode | ((props: ISidebarBaseProps) => React.ReactNode);
}

const decorate = withStylesPure(() => ({
  valid: {
    backgroundColor: '#e0e0e0',
  },
  invalid: {
    backgroundColor: '#e0e0e0',
  },
  listRoot: {},
}));

export { StyledComponentProps };

const Sidebar = decorate<ISidebarProps & IChildrenProp>(
  ({
    windowId,
    tabId,
    citations,
    enterCitation,
    leaveCitation,
    classes: classesProp,
    title,
    children,
  }) => {
    const enter = (props: CitationState) => () =>
      enterCitation({ windowId, tabId, ...props });
    const leave = (props: CitationState) => () =>
      leaveCitation({ windowId, tabId, ...props });
    const array = (citations && Object.values(citations)) || [];
    const { listRoot: root, ...classes } = classesProp;
    return (
      <div className={root}>
        {typeof children === 'function'
          ? children({ windowId, tabId, citations })
          : children}
        {array.length > 0 && (
          <List>
            {array.map(props => (
              <SidebarCitation
                {...props}
                key={props.id}
                onMouseEnter={enter(props)}
                onMouseLeave={leave(props)}
                classes={classes}
                title={title}
              />
            ))}
          </List>
        )}
      </div>
    );
  }
);

export default Sidebar;
