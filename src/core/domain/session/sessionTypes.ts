import { IdOptionalType } from '../common/genericTypes';

export interface ISessionUser {
    id: IdOptionalType;
}

export interface ISessionOrganization {
    id: string;
    name: string;
}

export interface IContextSession {
    userSessionUuid: IdOptionalType;
    reqSessionUuid: IdOptionalType;
}
