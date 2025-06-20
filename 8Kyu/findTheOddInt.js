/* Given an array of integers, find the one that appears an odd number of times.

There will always be only one integer that appears an odd number of times.
Examples

[7] should return 7, because it occurs 1 time (which is odd).
[0] should return 0, because it occurs 1 time (which is odd).
[1,1,2] should return 2, because it occurs 1 time (which is odd).
[0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
[1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd). */

function findOdd(A) {
    let counts = new Map();
    
    if (A.length == 1){
      return A[0];
    }
      for (value of A){
            counts.set(value, (counts.get(value) || 0) + 1);
          }
        
      
    for (let [key, value] of counts){
      console.log(counts);
      if(value % 2 == 1){
        return key;
      }
    }
    }
  
