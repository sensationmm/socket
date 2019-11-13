export const splitArrayIntoChunksOfN = (array: any[], n: number, concatLastChunk = false) => {
  const chunksNum = array.length % n === 0 ? array.length / n : Math.floor(array.length / n) + 1;
  let chunks: any[] = [];

  for (let i = 0; i < chunksNum; i++) {
    if (concatLastChunk && i === chunksNum - 2) {
      chunks = chunks.concat([array.slice(n * i)]);
      break;
    } else {
      chunks = chunks.concat([array.slice(n * i, n * (i + 1))]);
    }
  }

  return chunks;
};
