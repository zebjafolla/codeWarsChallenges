/* Build Tower

Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. A tower block is represented with "*" character.

For example, a tower with 3 floors looks like this:

[
  "  *  ",
  " *** ", 
  "*****"
]

And a tower with 6 floors looks like this:

[
  "     *     ", 
  "    ***    ", 
  "   *****   ", 
  "  *******  ", 
  " ********* ", 
  "***********"
]
 */

towerBuilder(6);
function towerBuilder(nFloors) {
   
    let tower = [];
    let floorBuildingBlock = "*"
    let blankSpace = " ";
    let floor;
    let countUp = 1;
    let countDown = nFloors - 1;
    if (nFloors == 1){
        tower.push(floorBuildingBlock);
    }
    else{
        for (let i = 0; i < nFloors; i++){
            
            floor = blankSpace.repeat(countDown);
            floor += floorBuildingBlock.repeat(countUp);
            floor += blankSpace.repeat(countDown);
            countDown = countDown - 1;
            countUp = countUp + 2;
            tower.push(floor);
        }
    }
       console.log(tower);
        return tower;   
    }
   

