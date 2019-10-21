export const splitArrayIntoChunksOfN = (array: any[], n: number) => {
  const chunksNum = array.length % n === 0 ? array.length / n : Math.floor(array.length / n) + 1;
  let chunks: any[] = [];

  for (let i = 0; i < chunksNum; i++) {
    chunks = chunks.concat([array.slice(n * i, n * (i + 1))]);
  }

  return chunks;
};