function removeDuplicates(nums: number[]): number {
    let x = 0;
    for(let i=0; i<nums.length;i++){
        if(nums[i] !== nums[i+2]){
            nums[x]=nums[i]
            x++;
        }
    }
    return x;
}