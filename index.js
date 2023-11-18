function solution(A, K) {
    const N = A.length;
  
    if (N === 0) {
      return A;
    }
  
    // Adjust K to be within the range [0, N-1] to avoid unnecessary rotations
    // 5 /2 = 2 rem 1
    // 5 % 2 = 1
  
      //  K = K % N;
      K = K % 100;
  
      // N = Math.min(N, 100);
  
    // rotating the values
    const rotated = A.slice(N - K);
    const remaining = A.slice(0, N - K);
  
    //patching the new arrays together using concat();
    return rotated.concat(remaining);
  }
  
  // const Array1 = [3, 8, 9, 7, 6];
  // const K1 = 3;
  
  const array1 = [6, 4, 8, 2, 9];
  const rtn = 2;
  
  console.log(solution(array1, rtn)); 
  