/* The Fibonacci numbers are the numbers in the following integer sequence (Fn): 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, ...

such that:
F(0)=0
F(1)=1
F(n)=F(n−1)+F(n−2)

Given a number, say prod (for product), we search two Fibonacci numbers F(n) and F(n+1) verifying:
F(n)*F(n+1)=prod

Your function takes an integer (prod) and returns an array/tuple (check the function signature/sample tests for the return type in your language):

    if F(n) * F(n+1) = prod:

    (F(n), F(n+1), true)

    If you do not find two consecutive F(n) verifying F(n) * F(n+1) = prod:

    (F(n), F(n+1), false)

    where F(n) is the smallest one such as F(n) * F(n+1) > prod.

Examples:

714 ---> (21, 34, true)
--> since F(8) = 21, F(9) = 34 and 714 = 21 * 34

800 --->  (34, 55, false)
--> since F(8) = 21, F(9) = 34, F(10) = 55 and 21 * 34 < 800 < 34 * 55
*/
console.log(productFib(4895));
function productFib(prod){
    let answerArr = new Array();
    let fibArray = functFib(prod);
    console.log(fibArray);
    for (let i = 0; i < fibArray.length; i++){
        for (let j = 0; j < fibArray.length; j++){
            // console.log(fibArray[i] * fibArray[j]);
            if(fibArray[i] * fibArray[j] == prod){
                answerArr.push(fibArray[i], fibArray[j], true);
                // console.log(answerArr);
                return answerArr;
        }
        }
    }
    answerArr.push(fibArray[fibArray.length - 2], fibArray[fibArray.length - 1], false);
    return answerArr;
  }


  functFib(5895);
  function functFib(number){
    let next = 1;
    let i = 0;
    let fibNumbers = [];
    while (fibNumbers.length < number){
        // console.log( i );
        // console.log(next);
        fibNumbers.push(i);
        // console.log(i);
        let temp = i + next;
        // console.log(temp);
        i = next;
        // console.log(i);
        next = temp;
        if(fibNumbers[fibNumbers.length - 1] * fibNumbers[fibNumbers.length - 2] >= number){
            break;
        }
    }
    // console.log(fibNumbers);
    return fibNumbers;
  }