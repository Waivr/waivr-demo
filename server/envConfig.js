const isInvalid = (value) => value === null || value === undefined || value.toString().trim() === '';

const checkValidEnvs = (envs) => {
    const invalidValue = Object
        .entries(envs)
        .filter(([, value]) => isInvalid(value));

    if (invalidValue && invalidValue.length > 0) {
        console.error('Expected env variable are null or empty.', invalidValue);
        throw new Error('Invalid server env variable configuration.');
    }
};

const buildEnvs = (container) => ({
});


const EnvConfig = {
    checkValidEnvs,
    buildEnvs
};

module.exports = EnvConfig;
