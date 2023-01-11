import { IContextSession } from '../../../src/core/domain/session/sessionTypes';

const asDomainFullSession = () => {

  const session: IContextSession = {

    userSessionUuid: 'b08976ff-b8b4-4d22-bade-64b04125ca04',
    reqSessionUuid: 'a3638305-b915-474d-9e4b-7c8fd1f0f12b',

  };

  return session;

};

const asObjectFullSession = () => ({
    'x-user-session-id': 'b08976ff-b8b4-4d22-bade-64b04125ca04',
    'x-req-session-id': 'a3638305-b915-474d-9e4b-7c8fd1f0f12b',
  });

const asDomain = {
  asFullSession: asDomainFullSession,
};
const asObject = {
  asFullSession: asObjectFullSession,
};

const ContextSessionFixture = {
  asDomain,
  asObject,
};

export default ContextSessionFixture;
