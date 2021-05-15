export const getRandom = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};
  
export const topObstacleHeight = getRandom(75, 300);
export const bottomObstacleHeight = getRandom(75, 300);