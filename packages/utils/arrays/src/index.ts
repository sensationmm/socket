export const splitArrayIntoChunksOfN = (array: any[], n: number) => {
  const chunksNum = Math.round(array.length / n);
  let chunks: any[] = [];

  for (let i = 0; i < chunksNum; i++) {
    chunks = chunks.concat([array.slice(n * i, n * (i + 1))]);
  }

  return chunks;
};
