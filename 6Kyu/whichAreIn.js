/* Description:

Given two arrays of strings a1 and a2 return a sorted array r in lexicographical order of the strings of a1 which are substrings of strings of a2.
Example 1:

a1 = ["arp", "live", "strong"]

a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

returns ["arp", "live", "strong"]
Example 2:

a1 = ["tarp", "mice", "bull"]

a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

returns []
Notes:

    Arrays are written in "general" notation. See "Your Test Cases" for examples in your language.
    In Shell bash a1 and a2 are strings. The return is a string where words are separated by commas.
    Beware: In some languages r must be without duplicates.

 */
    
    // let array1 = ["xyz", "live", "strong"]; 
    // let array2 = ["lively", "alive", "harp", "sharp", "armstrong"];
    // inArray(array1, array2);
    
    function inArray(array1,array2){
        // if array.includes filter is probably better
        let r = [];
        //temp set so that only one of each match can be added
        let temp = new Set();
        for (word1 of array1){
            for (word2 of array2)
            {
                // see if each ele from the array2 includes word1, can be inside of, etc
                if (word2.includes(word1)){
                    //uses the set so as not to have duplicates
                    temp.add(word1);
                }
            }
        }
        //creates an array from the temp set and sorts and then stores it into 'r'
        r = [...temp].sort();
        
        console.log(`r = ${r}`);
        return r;
    }
    
        
      