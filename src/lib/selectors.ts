import { createSelector, defaultMemoize } from 'reselect';

import {
  CitationListState,
  CitationState,
  State,
  TabMapState,
  TabState,
} from './state';

const findOwnTab = (ownTabId: number, tabs: TabMapState): TabState =>
  tabs[ownTabId];
const getCitations = (tab?: TabState) => (tab && tab.citations) || {};
const getCitation = (citationId: string, citations?: CitationListState) =>
  citations && citations[citationId];

export const getWindowId = (state: State) => state.windowId;
export const getTabId = (state: State) => state.tabId;
export const getTabs = (state: State) => state.tabs;
export const getValidity = (citation?: CitationState) =>
  citation && citation.valid;

export const getOwnTab = createSelector(getTabId, getTabs, findOwnTab);
export const getOwnCitations = createSelector(getOwnTab, getCitations);

export const getSingleCitation = createSelector(getTabs, tabs =>
  defaultMemoize((tabId: number, citationId: string) =>
    getCitation(citationId, getCitations(findOwnTab(tabId, tabs)))
  )
);
