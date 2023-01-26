const isInvalid = (value: unknown) =>
  value === null || value === undefined || value.toString().trim() === '';

const checkValidEnvs = (
  envs: { [s: string]: unknown } | ArrayLike<unknown>
) => {
  const invalidValue = Object.entries(envs).filter(([, value]) =>
    isInvalid(value)
  );

  if (invalidValue && invalidValue.length > 0) {
    console.error('Expected env variable are null or empty.', invalidValue);
    throw new Error('Invalid server env variable configuration.');
  }
};

const buildEnvs = (container: any) => ({});

const EnvConfig = {
  checkValidEnvs,
  buildEnvs,
};

export default EnvConfig;
