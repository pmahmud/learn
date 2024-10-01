// function removeDuplicates(nums: number[]): number {
//     return Array.from(new Set(nums)).length;    
// };


function removeDuplicates(nums: number[]): number {
    if (nums.length == 0 || nums.length == 1)
        return nums.length;    

    let w: number = 1;
    for (let r= 1; r < nums.length; r++) {
        if (nums[r] !== nums[r - 1]) {
            nums[w] = nums[r];
            w++;
        }
    }

    return w;
};

const i1 = [1,1,2];
const i2 = [0,0,1,1,1,2,2,3,3,4];
console.log(removeDuplicates(i1));
console.log(removeDuplicates(i2));
