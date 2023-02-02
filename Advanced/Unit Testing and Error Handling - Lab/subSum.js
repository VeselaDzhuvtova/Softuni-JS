function subSum (nums, start, end) {
    if(!Array.isArray(nums)){
        return NaN;
    }

    let startIndex = Math.max(start, 0);
    let endIndex = Math.min(end, nums.length - 1);

    let subNumbers = nums.slice(startIndex, endIndex + 1);
    
    let sum = subNumbers.reduce((a, x) => a + Number(x), 0);

    return sum;
}
subSum([10, 20, 30, 40, 50, 60], 3, 300);