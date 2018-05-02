import '../lib/object.values';

import * as React from 'react';
import { pure } from 'recompose';

import { CitationListState, CitationState } from '../lib/state';
import SidebarCitation from './SidebarCitation';

// import { info } from '../lib/util';
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
};

const Sidebar = ({
  windowId,
  tabId,
  citations,
  enterCitation,
  leaveCitation,
}: SidebarProps) => {
  enterCitation = enterCitation || (() => {});
  leaveCitation = leaveCitation || (() => {});
  return (
    <div>
      <p>
        This is the sidebar, currently on window {windowId} tab {tabId}.
      </p>
      <p>Current citation states:</p>
      <ul>
        {Object.values(citations).map(props => (
          <SidebarCitation
            {...props}
            key={props.id}
            onMouseEnter={() => enterCitation({ windowId, tabId, ...props })}
            onMouseLeave={() => leaveCitation({ windowId, tabId, ...props })}
          />
        ))}
      </ul>
    </div>
  );
};

export default pure(Sidebar);
