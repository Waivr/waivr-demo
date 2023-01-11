import { IdOptionalType } from '../common/genericTypes';
import { IContextSession } from '../session/sessionTypes';

export interface LogUser {
    [key: string]: any;
    id: IdOptionalType;
    ipAddress?: string;
}

// eslint-disable-next-line no-shadow
export enum LogSeverity {
    Fatal,
    Error,
    Warning,
    Log,
    Info,
    Debug,
    Critical,
}

export enum Severity {
    /** JSDoc */
    Fatal = 'fatal',
    /** JSDoc */
    Error = 'error',
    /** JSDoc */
    Warning = 'warning',
    /** JSDoc */
    Log = 'log',
    /** JSDoc */
    Info = 'info',
    /** JSDoc */
    Debug = 'debug'
  }


// eslint-disable-next-line no-shadow
export enum LogStatus {
    Ok,
    Error,
    Fatal,
}

export interface LogContext {
    user: LogUser | null;
    level: LogSeverity;
    tags: {
        [key: string]: number | string | boolean | bigint | symbol | null | undefined;
    } | null;
    status: LogStatus;
    session: IContextSession;
}
