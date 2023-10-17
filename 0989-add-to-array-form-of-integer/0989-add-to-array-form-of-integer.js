/**
 * @param {number[]} num
 * @param {number} k
 * @return {number[]}
 */
var addToArrayForm = function(num, k) {
    const leng = num.length;
    if(leng == 0){
        return Array.from(String(k, Number));
    }
     const test = BigInt(num.join('')) + BigInt(k);
    return Array.from(String(test, Number));
    
};