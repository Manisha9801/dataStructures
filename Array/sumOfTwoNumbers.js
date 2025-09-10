//when all numbers in array is unique
var twoSum = function (nums, target) {
  let map = new Map();
  const ans = [];
  for (let i = 0; i < nums.length; i++) {
    const diff = target - nums[i];
    if (map.get(diff) != undefined) {
      ans.push(map.get(diff), i);
    } else map.set(nums[i], i);
  }
  return ans;
};

// console.log(twoSum([2, 7, 11, 15], 9)); // [0,1]
// console.log(twoSum([3,2,4], 6)); // [0,1]
// console.log(twoSum([3,1,3,6], 7)); // [0,1]
console.log(twoSum([-3, 4, 3, 90], 0)); // [0,1]

//We are using map to store the value of array and its index as key value pair.
//Then we are iterating through the array and checking if the difference of target and current element is present in the map or not.
//If present then we are pushing the index of that element and current index to the answer array.
//Finally we are returning the answer array.
