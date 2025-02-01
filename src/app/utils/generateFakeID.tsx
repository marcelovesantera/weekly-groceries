export const generateFakeID = () => {
  const digits =
    "0123456789abcdefghijklmnopqrstuvxywzABCDEFGHIJKLMNOPQRSTUVXYWZ";
  const fakeIdLength = 20;
  let fakeId = "";
  for (let i = 1; i <= fakeIdLength; i++) {
    const index = Math.floor(Math.random() * digits.length);
    fakeId = fakeId + digits[index];
  }
  return fakeId;
};
