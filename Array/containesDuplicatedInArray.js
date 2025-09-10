var containsDuplicate = function(nums) {
const map = new Map();
let isDuplicate = false;
    for(value of nums){
        if(map[value] !== undefined){
            isDuplicate = true;
            break;
        }
        map[value] = 1;
    }
    return isDuplicate;
};

console.log(containsDuplicate([1,2,3,1])); // true

//when u get duplicate numbers in array that means you can keep the 
//count of the number with the number as key and its count as value in a map