function searchInsert(nums: number[], target: number): number {
      if (nums[nums.length - 1] < target) {
    return nums.length;
  }
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      return i;
    } else if (nums[i] > target) {
      return i;
    }
  }
    
};