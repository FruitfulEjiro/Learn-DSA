// ----- Not oslved Yet ------


const median = (arr1, arr2) => {
   const merged = arr1.concat(arr2);
   const median =
      (arr1.length + arr2.length) % 2 === 0
         ? merged[(arr1.length + arr2.length) % 2]
         : merged[Math.floor((arr1.length + arr2.length) / 2)] +
           merged[Math.floor((arr1.length + arr2.length) / 2 + 1)];

   return median;
};


