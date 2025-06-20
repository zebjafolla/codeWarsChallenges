/* This time no story, no theory. The examples below show you how to write function accum:
Examples:

accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"

The parameter of accum is a string which includes only letters from a..z and A..Z. */


//Looks like the place in the string (s) defines how many times that letter needs to repeat
// might as well make them their own strings, perhaps an array separated by the '-'

accum("ZpglnRxqenU");
function accum(s) {
    s = s.toLowerCase();
    let newS = "";
    let newSArray = [];
	for (let i = 0; i < s.length; i++){
        newS += s[i];
        }
    newSArray = newS.split("");

    for (let i = 0; i < newSArray.length; i++){
        for(let j = 0; j < i; j++){
        newSArray[i] += s[i];
        }
    }
    let i = 0;
    for(word of newSArray){
        let newWord = word[0].toUpperCase() + word.slice(1);
        newSArray[i] = newWord;
        i++;
    }
    newS = newSArray.join("-");
    console.log(newS);
    return newS;
}