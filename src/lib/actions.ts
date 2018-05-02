import { State } from '.';
import {
  AddCitationState,
  CitationListState,
  CitationState,
  UpdateCitationState,
} from './state';

export const SET_WINDOW = 'SET_WINDOW';
export const SET_TAB = 'SET_TAB';
export const REMOVE_TAB = 'REMOVE_TAB';
export const ADD_TAB = 'ADD_TAB';
export const CLEAR_TAB = 'CLEAR_TAB';
export const ADD_CITATION = 'ADD_CITATION';
export const UPDATE_CITATION = 'UPDATE_CITATION';
export const SET_VALIDATION_RESULT = 'SET_VALIDATION_RESULT';
export const VALIDATE_CITATION = 'VALIDATE_CITATION';
export const HOVER_CITATION = 'HOVER_CITATION';
export const HOVER_LEAVE_CITATION = 'HOVER_LEAVE_CITATION';
export const REMOVE_CITATION = 'REMOVE_CITATION';
export const SET_CITATIONS = 'SET_CITATIONS';
export const REPLACE_STATE = 'REPLACE_STATE';

export type Action =
  | {
      type: typeof REMOVE_TAB;
      tabId: number;
    }
  | {
      type: typeof SET_WINDOW;
      windowId: number;
    }
  | {
      type: typeof SET_TAB;
      tabId: number;
    }
  | {
      type: typeof ADD_TAB;
      tabId: number;
    }
  | {
      type: typeof CLEAR_TAB;
      tabId: number;
    }
  | {
      type: typeof ADD_CITATION;
      tabId: number;
      payload: AddCitationState;
    }
  | {
      type: typeof UPDATE_CITATION;
      tabId: number;
      payload: UpdateCitationState;
    }
  | {
      type: typeof VALIDATE_CITATION;
      tabId: number;
      payload: Pick<CitationState, 'id' | 'hash' | 'text'>;
    }
  | {
      type: typeof SET_VALIDATION_RESULT;
      tabId: number;
      payload: Required<Pick<CitationState, 'id' | 'validationResult'>>;
    }
  | {
      type: typeof HOVER_CITATION;
      tabId: number;
      payload: Pick<CitationState, 'id'>;
    }
  | {
      type: typeof HOVER_LEAVE_CITATION;
      tabId: number;
      payload: Pick<CitationState, 'id'>;
    }
  | {
      type: typeof REMOVE_CITATION;
      tabId: number;
      id: string;
    }
  | {
      type: typeof SET_CITATIONS;
      tabId: number;
      citations: CitationListState;
    }
  | {
      type: typeof REPLACE_STATE;
      state: State;
      keepWindowAndTab?: boolean;
    };
