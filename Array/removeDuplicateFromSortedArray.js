//https://leetcode.com/problems/remove-duplicates-from-sorted-array/submissions/

var removeDuplicates = function (nums) {
    let i = 0;
    for (let j = 1; j < nums.length; j++) {
        if (nums[j] !== nums[i]) {
            i = i + 1;
            nums[i] = nums[j];
        }
    }
    return i+1;
};

console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4])); // [1,2]

//Time complexity: O(n)
//Space complexity: O(1)

//Here we are not allowed to create a new array hence we need to do it in place
//We are using two pointers i and j
//i is the slow pointer which is used to keep track of the last unique element
//j is the fast pointer which is used to traverse the array
//We are comparing the elements at i and j, if they are not equal then we increment i and update the element at i with the element at j
//Finally we return i+1 as the length of the array with unique elements