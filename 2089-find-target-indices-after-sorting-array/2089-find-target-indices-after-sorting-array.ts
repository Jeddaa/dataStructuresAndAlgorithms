function targetIndices(nums: number[], target: number): number[] {
    const ne = [];
    nums.sort((a,b)=> a-b);
    for(let i =0; i<nums.length;i++){
        if(nums[i]==target){
            ne.push(i);
        }
    }
    return ne;
    
};