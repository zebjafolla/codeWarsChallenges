/* Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.
Examples

pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
pigIt('Hello world !');     // elloHay orldway ! */

pigIt("How many times must I try this !");
function pigIt(str){
    //split the parameter (string argument) provided into a an array of Strings, separated by space
    let arrStr = str.split(" ");
    //print to the console to make sure
    console.log(arrStr);
    //idea on how to check each characters to see if its a letter or punctuation
    let charArr = str.split("");
    // create a variable to hold a string argument 
    let strStr = "";
    //create a variable to hold a punctuation mark if any are found
    let puncMark = "";
    // create an empty map to hold chars and their locations to perform math and reinsert them into the finished string later, in order to not add 'ay'
    let indexMap = new Map();

    // for loop for going through the array of chars from the argument string to check for punctuations and removes them and sends them to the Map()
    for (let i = charArr.length - 1; i > 0; i--){
        if(!/^[ a-z0-9]$/i.test(charArr[i])){
            puncMark = charArr[i];
            indexMap.set(i, puncMark);
            charArr.splice(i, 1);
        }
    }
    // joins back the charArr without puncations and saves it in newStr
    let newStr = charArr.join("");
    // prints to the console to make sure
    console.log(newStr);
    //splits string again separated by spaces
    arrStr = newStr.split(" ");
    //prints to the console to make sure
    console.log(`arrStr = ${arrStr}`);
    //goes through each string inside of the arrStr and slices, adds 'ay', handles spacing where needed, and rebuilds, saving it to slicedFin variable
    for(word of arrStr){
        //takes the first word in this case "How" and and saves "o[1]w[2]" to the temp var str1
        let str1 = word.slice(1);
        //prints 'ow' to the console to make sure it was saved
        console.log(`str1 = ${str1}`);
        //leader here is the first letter of the word in the current iteration, in this case "H"
        let leader = word.slice(0, 1);
        //prints to the console to make sure the correct letter was saved to 'leader'
        console.log(`leader = ${leader}`);
        //if statement to see if the str1 which is the last have of the current word contains an exclamation point
        if(/^([a-zA-Z]+)$/.test(word)){
            // console.log(str1);
            //if it doesnt include an exclamation point, the it adds the 'leader' onto the end and adds the letters 'ay' and saves it again to the temporary str1 variable
            str1 += leader + "ay";
            // console.log(str1);
        }
        //splits the strStr argument into an array only if the strStr arguments length is less than the arrStrs length
        if (strStr.split(" ").length < arrStr.length){
            //it adds spacing back ingto the strStr, thus iterating through the loop
            strStr += str1 + " ";
        }
        else{
            //it removes the last space at the end when the last word is printed
            strStr += str1.trimEnd();
        }
    }
    //slicedFin is the strStr split into an Array of characters with the spaces and add 'ays'
    let slicedFin = strStr.split("");
    //makes sure by printing
    console.log(slicedFin);
    //uses a for loop to pull the index the original punctuations mark was pulled from and adds 2 spaces to make up for the two letters that were added for 'ay' then it multiplies this by the length of the arrStr
    console.log(arrStr);
    console.log(indexMap);
    for([index, char] of indexMap){
        console.log(index, arrStr.length);
        slicedFin[index + (2 * (arrStr.length))] = char;
        console.log(char, index);
    }
    //prints to the console the final sentence
    console.log(slicedFin.join(""));
    //returns the computed result back out of the function
    return slicedFin.join("");
  }
