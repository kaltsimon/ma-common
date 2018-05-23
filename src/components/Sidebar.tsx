import '../lib/object.values';

import * as React from 'react';
import { pure } from 'recompose';

import { CitationListState, CitationState } from '../lib/state';
import SidebarCitation from './SidebarCitation';
import { Subheading } from '.';
import { List } from '@material-ui/core';

// import { info } from '../lib/util';
import { ValidationResult } from '../db-results';
// const log = info(`[SidebarComponent]`);

export type EventHandlerData = CitationState & {
  windowId: number;
  tabId: number;
};

export type EventHandler = (data: EventHandlerData) => void;

export type SidebarProps = {
  citations: CitationListState;
  windowId: number;
  tabId: number;
  enterCitation: EventHandler;
  leaveCitation: EventHandler;
  title?: string | ((result?: ValidationResult) => string);
};

const Sidebar = ({
  windowId,
  tabId,
  citations,
  enterCitation,
  leaveCitation,
  title,
}: SidebarProps) => {
  return (
    <div>
      <p>
        This is the sidebar, currently on window {windowId} tab {tabId}.
      </p>
      <Subheading>Current citation states:</Subheading>
      <List>
        {Object.values(citations).map(props => (
          <SidebarCitation
            {...props}
            key={props.id}
            onMouseEnter={() => enterCitation!({ windowId, tabId, ...props })}
            onMouseLeave={() => leaveCitation!({ windowId, tabId, ...props })}
            title={title}
          />
        ))}
      </List>
    </div>
  );
};

export default pure(Sidebar);
