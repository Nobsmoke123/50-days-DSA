const sortSquaredArray = (array) => {
  for (let i = 0; i < array.length; i++) {
    array[i] = Math.pow(array[i], 2);
  }
  return array.sort((a,b)=>a-b);
};

