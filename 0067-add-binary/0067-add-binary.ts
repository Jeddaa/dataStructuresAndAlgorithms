function addBinary(a: string, b: string): string {
    const su = BigInt('0b' + a) + BigInt('0b' + b);
    return su.toString(2)
};