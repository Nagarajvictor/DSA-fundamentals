function gcd(a, b) {
    if ( ! b) {
        return a;
        }
return gcd(b, a % b);
};
console.log(gcd(4, 8));