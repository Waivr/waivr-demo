import { Profile, RoleType } from '../../../src/core/domain/login/profile';

const RootProfile = new Profile(
  '38f07e6d-dd8e-487f-91b1-9469b1eab4be',
  true,
  null,
  RoleType.ROLE_USER
);

const NonRootProfile = new Profile(
  '93f0a7e0-306d-4732-9e25-df48b32dc4ba',
  true,
  null,
  RoleType.ROLE_ADMIN
);

const asObjectRoot = (): any => ({
  uuid: RootProfile.uuid,
  active: RootProfile.active,
  role: RootProfile.role,
});

const asDomainRoot = (): Profile => ({
  ...RootProfile
});

const asObjectNonRoot = (): any => ({
  uuid: NonRootProfile.uuid,
  active: NonRootProfile.active,
  role: NonRootProfile.role,
});

const asDomainNonRoot = (): Profile => ({
  ...NonRootProfile
});

const asDomain = {
  asRoot: asDomainRoot,
  asNonRoot: asDomainNonRoot,
};

const asObject = {
  asRoot: asObjectRoot,
  asNonRoot: asObjectNonRoot,
};

const LoginProfileFixture = {
  asDomain,
  asObject,
};

export default LoginProfileFixture;
