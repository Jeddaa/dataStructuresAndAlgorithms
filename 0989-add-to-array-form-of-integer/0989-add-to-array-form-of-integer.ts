function addToArrayForm(num: number[], k: number): number[] {
    const test = BigInt(num.join('')) + BigInt(k);
    const fan: number[] = Array.from(String(test), Number);
    return fan;
};