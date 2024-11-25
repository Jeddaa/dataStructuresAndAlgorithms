function twoSum(numbers: number[], target: number): number[] {
    let left = 0;
    let right = numbers.length - 1;

    while (left < right) {
        const sum = numbers[left] + numbers[right];
        if (sum === target) {
            return [left + 1, right + 1]; // Convert to 1-based indices
        } else if (sum < target) {
            left++;
        } else {
            right--;
        }
    }

    return []; // Return an empty array if no solution is found
}
