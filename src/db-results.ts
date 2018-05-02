export const ID_INVALID = 'ID_INVALID';
export const HASH_INVALID = 'HASH_INVALID';
export const HASH_DOESNT_EXIST = 'HASH_DOESNT_EXIST';
export const NO_ANSWER_YET = 'NO_ANSWER_YET';
export const ANSWER_REJECTED = 'ANSWER_REJECTED';
export const ANSWER_ACCEPTED = 'ANSWER_ACCEPTED';
export const DB_ERROR = 'DB_ERROR';

export type DateType = string;

export type DBResult = {
  error?: string;
  exists: boolean;
  answerExists: boolean;
  answer: boolean;
  requestTimestamp?: string;
  responseTimestamp?: string;
};

export type ValidationResult =
  | { type: typeof ID_INVALID; id: string }
  | { type: typeof HASH_INVALID; id: string; actual: string }
  | { type: typeof HASH_DOESNT_EXIST; id: string }
  | { type: typeof NO_ANSWER_YET; id: string; requestTimestamp: DateType }
  | {
      type: typeof ANSWER_REJECTED;
      id: string;
      requestTimestamp: DateType;
      responseTimestamp: DateType;
    }
  | {
      type: typeof ANSWER_ACCEPTED;
      id: string;
      requestTimestamp: DateType;
      responseTimestamp: DateType;
    }
  | {
      type: typeof DB_ERROR;
      id: string;
      message: string;
    };

export const idInvalid = (id: string): ValidationResult => ({
  id,
  type: ID_INVALID,
});

export const hashInvalid = (id: string, actual: string): ValidationResult => ({
  type: HASH_INVALID,
  id,
  actual,
});

export const hashDoesntExist = (id: string): ValidationResult => ({
  id,
  type: HASH_DOESNT_EXIST,
});

export const noAnswerYet = (
  id: string,
  requestTimestamp: DateType
): ValidationResult => ({
  type: NO_ANSWER_YET,
  id,
  requestTimestamp,
});

export const answerRejected = (
  id: string,
  requestTimestamp: DateType,
  responseTimestamp: DateType
): ValidationResult => ({
  type: ANSWER_REJECTED,
  id,
  requestTimestamp,
  responseTimestamp,
});

export const answerAccepted = (
  id: string,
  requestTimestamp: DateType,
  responseTimestamp: DateType
): ValidationResult => ({
  type: ANSWER_ACCEPTED,
  id,
  requestTimestamp,
  responseTimestamp,
});

export const dbError = (id: string, message: string): ValidationResult => ({
  type: DB_ERROR,
  id,
  message,
});
