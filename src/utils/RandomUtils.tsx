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

export const getRandomFloat = (min: number, max: number) => {
  return Math.random() < 0.5
    ? (1 - Math.random()) * (max - min) + min
    : Math.random() * (max - min) + min;
};

export const getRandomArrayDelays = (length: number) => {
  const arrayDelays: number[] = [...new Array(length)];
  let delay = 1;
  const step = 2;

  for (let i = 0; i < arrayDelays.length; i++) {
    arrayDelays[i] = getRandomFloat(delay, delay + 1);
    if (delay % 3 === 0) {
      delay += step;
    } else {
      delay += 1;
    }
  }

  return arrayDelays;
};
