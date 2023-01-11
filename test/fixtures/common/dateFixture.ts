const inMinutes = (minutes: number) => {

  const futureDate = new Date();
  futureDate.setMinutes(futureDate.getMinutes() + minutes);
  return futureDate;

};

const inHours = (hours: number) => {

  const futureDate = new Date();
  futureDate.setHours(futureDate.getHours() + hours);
  return futureDate;

};

const inDays = (days: number) => {

  const hours = days * 24;
  return inHours(hours);

};

const DateFixture = {
  inMinutes,
  inHours,
  inDays,
};

export default DateFixture;
