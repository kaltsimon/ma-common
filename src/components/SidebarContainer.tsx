import { ComponentClass, StatelessComponent } from 'react';
import { connect } from 'react-redux';

import { getOwnCitations, getTabId, getWindowId } from '../lib/selectors';
import { CitationState, State } from '../lib/state';
import Sidebar from './Sidebar';

const mapStateToProps = (state: State) => ({
  citations: getOwnCitations(state),
  windowId: getWindowId(state),
  tabId: getTabId(state),
});

// For declarations
export { CitationState, StatelessComponent, ComponentClass };

const SidebarContainer = connect(mapStateToProps)(Sidebar);
export default SidebarContainer;
