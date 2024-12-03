function isGood(nums: number[]): boolean {
    const n = nums.length;
    const goodArray = Array.from({length: n-1}, (_, i)=>i+1).concat(n-1);
    nums.sort((a, b) => a - b);
    return nums.join('')=== goodArray.join('');
    
};