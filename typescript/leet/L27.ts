// function removeElement(nums: number[], val: number): number {
//     return nums.filter((v) => v !== val).length;
// };

 function removeElement(nums: number[], val: number): number {
    let w: number = 0;
    for (let r = 0; r < nums.length; r++) {
        if (nums[r] !== val) {
            nums[w] = nums[r];
            w++;
        }
    }

    return w;
};

const i1 = [3,2,2,3];
const i2 = [0,1,2,2,3,0,4,2];
console.log(removeElement(i1, 3));
console.log(removeElement(i2, 2));
