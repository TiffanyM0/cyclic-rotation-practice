function solution(A, K) {
    const N = A.length;

    // Check for empty array or no rotation needed
    if (N === 0) {
        return A;
    }
    // Adjust K to be within the range [0, N-1] to avoid unnecessary rotations
    K = K % N;

    // Perform rotation using Array.slice() method
    const rotatedPart = A.slice(N - K);
    const remainingPart = A.slice(0, N - K);

    // Concatenate the rotated and remaining parts
    return rotatedPart.concat(remainingPart);
}

//Example usage:
const A1 = [3, 8, 9, 7, 6];
const K1 = 3;
console.log(solution(A1, K1));  // expected output: [9, 7, 6, 3, 8]


