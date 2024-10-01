// 1929. Concatenation of Array

function getConcatenation(nums: number[]): number[] {
    const ans: number[] = new Array(nums.length * 2);
    for(let i: number = 0; i < nums.length; i++) {
        ans[i] = nums[i];
        ans[i + nums.length] = nums[i];
    }
    return ans;
};

console.log(getConcatenation([1,2,1]));
console.log(getConcatenation([1,3,2,1]));
/*
Input: nums = [1,2,1]
Output: [1,2,1,1,2,1]
Input: nums = [1,3,2,1]
Output: [1,3,2,1,1,3,2,1]
*/