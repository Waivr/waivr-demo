import { IContextSession } from '../../../domain/session/sessionTypes';
import RequiredAttributes from '../../../paramutils/requiredAttributes';

const mapSession = (headers: any): IContextSession => {

    if (RequiredAttributes.isUndefinedOrNull(headers)) {

        return {
            reqSessionUuid: null,
            userSessionUuid: null,
        };

    }

    const reqSessionUuid = (headers && headers['x-req-session-id']) || null;
    const userSessionUuid = (headers && headers['x-user-session-id']) || null;

    return {
        userSessionUuid,
        reqSessionUuid,
    };

};

export default mapSession;
