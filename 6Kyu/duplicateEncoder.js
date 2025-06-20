/* The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.
Examples

"din"      =>  "((("
"recede"   =>  "()()()"
"Success"  =>  ")())())"
"(( @"     =>  "))((" 

Notes

Assertion messages may be unclear about what they display in some languages. If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!
 */

function duplicateEncode(word){
    word = word.toLowerCase();
    let mapWord = new Map();
    let changedWord = "";

     //make a key/value map to hold the times a letter shows up
    for (letter of word){
      if(mapWord.has(letter)){
        mapWord.set(letter, (mapWord.get(letter) + 1))
      }
      else{
        mapWord.set(letter, 1);
      }
    }

   //if number of times is greater than one, the value for the letter becomes ")", else becomes "("
    mapWord.forEach((value, key) => {
      if (value > 1){
        mapWord.set(key, ")");
      }
      else{
        mapWord.set(key, "(");
      }
    });

    //replace letters in the word for value of corresponding keys in map
        for (letter of word){
          console.log(letter);
          mapWord.forEach((value, key) =>  {
          if(letter == key)
          changedWord += value;
      })};
        console.log(changedWord);
    }
  
    




