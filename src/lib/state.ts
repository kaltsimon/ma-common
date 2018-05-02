import { ValidationResult } from '../db-results';

export interface AddCitationState {
  id: string;
  hash: string;
  text: string;
}

export interface CitationState extends AddCitationState {
  valid: boolean;
  hover?: boolean;
  validationResult?: ValidationResult;
}

export type UpdateCitationState = Partial<CitationState> &
  Pick<CitationState, 'id'>;

export type CitationListState = { [key: string]: CitationState };

export type TabState = {
  tabId: number;
  citations: CitationListState;
};

export type TabMapState = { [key: string]: TabState };

export type State = {
  tabs: TabMapState;
  windowId: number;
  tabId: number;
};
