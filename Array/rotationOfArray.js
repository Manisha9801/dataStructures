https://leetcode.com/problems/rotate-array/description/


//This approach can only be used when there is no duplicate elements, since in map we cannot store duplicates.
// var rotate = function (nums, k) {
//   if (k >= nums.length) {
//     k = k % nums.length;
//   }
//   let map = new Map();
//   for (let i = 0; i < nums.length; i++) {
//     if (i + k <= nums.length - 1) {
//       map.set(nums[i], i + k);
//     } else {
//       map.set(nums[i], i + k - nums.length);
//     }
//   }
//   for (let [key, value] of map) {
//     nums[value] = key;
//   }
//   return nums;
// };

//This is used for duplicate elements in the array as I have used index as a key and value as element in array
// var rotate = function (nums, k) {
//   if (k >= nums.length) {
//     k = k % nums.length;
//   }
//   let map = new Map();
//   for (let i = 0; i < nums.length; i++) {
//     if (i + k <= nums.length - 1) {
//       map.set(i + k, nums[i]);
//     } else {
//       map.set(i + k - nums.length, nums[i]);
//     }
//   }
//   for (let [key, value] of map) {
//     nums[key] = value;
//   }
//   return nums;
// };

//Using Reverasl algorithm and achieving O(1) space complexity
var rotate = function (nums, k) {
  if (k >= nums.length) {
    k = k % nums.length;
  }
  function reverse(start, end) {
    while (start < end) {
      const temp = nums[start];
      nums[start] = nums[end];
      nums[end] = temp;
      start++;
      end--;
    }
  }

  reverse(0, nums.length - 1);
  reverse(0, k - 1);
  reverse(k, nums.length - 1);
  return nums;
};


console.log(rotate([11, 12, 13, 14, 15, 16, 17], 3)); // [5,6,7,1,2,3,4]
//                  15, 16, 17, 11, 12, 13, 14            11
//    1
console.log(rotate([-1, -100, 3, 99], 2)); // [3,99,-1,-100]
              //              -1 