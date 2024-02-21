export const randomChoice = (array: any[]): any => {
  const randomIndex = Math.floor(Math.random() * (array.length - 1));
  const result = array[randomIndex];

  return result;
};

export const getRandomNumber = (min: number, max: number): number => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const result = Math.floor(Math.random() * (max - min + 1)) + min;

  return result;
};
