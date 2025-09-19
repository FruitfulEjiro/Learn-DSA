const mostWater = (heightArr) => {
   let mostWaterHeld = 0;

   const findMaximumArea = (left, right) => {
      if (left >= right) return;
      
      let width = right - left;
      let height = Math.min(heightArr[left], heightArr[right]);
      let area = width * height;

      mostWaterHeld = Math.max(mostWaterHeld, area);

      heightArr[left] < heightArr[right] ? findMaximumArea(left + 1, right) : findMaximumArea(left, right - 1);
   };

   findMaximumArea(0, heightArr.length - 1);

   return mostWaterHeld;
};


console.log(mostWater([1,8,6,2,5,4,8,3,7])); // 49

/* 
// My Approach

i used two pointer, one at the beginnig of the array and the other at the end of the array
then i calculated the amount of water it can hold(area) and store it, then i check which of
the two points have the lowest height and i change that point(increment if its the left and
decrement if its the right) then i calculate the amount of water it can hold, if its ore than
the previous one, i replace the previous value with the new one and i repeat the process till
the i've check each element in the array. this results in an time complexity of O(n) since we
only check each element once and not cross check each element with every element in the array.

*/