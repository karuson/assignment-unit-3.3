console.log('****** Part Supply *******');
// REQUIRED FEATURES

// 1. Create a variable called 'partsNeeded' with a value of the number 40 
//    & console.log the variable
console.log('1. Number of partsNeeded:');
const partsNeeded = 40;

// 2. Create a variable call 'supplyChanges' set it to an array containing
//    the following numbers: 3, 5, -6, 0, 7, 11
console.log('2. Array of supplyChanges:');
let supplyChanges = [3, 5, -6, 0, 7, 11];
// console log supplyChanges to keep track of it in the console
console.log(supplyChanges);

// 3. Console log the value of the second item in the 'supplyChanges' array
console.log('3. Second supplyChange is:');
console.log(supplyChanges[1]);

// 4. The last item was added by mistake. Remove it from the 'supplyChanges' 
//    array & console.log the value removed.
console.log('4. Removed item:');
supplyChanges.pop();
console.log(supplyChanges);

// 5. A delivery of 25 more parts arrived. Add the value 25 to the end of the array
console.log('5. Adding 25 to supplyChanges.');
supplyChanges.push(25);
console.log(supplyChanges);

// 6. Write a `for` loop that shows each value in the 'supplyChanges' array
//    Use a console.log formatted as follows, where x is the value from the array
//    - if it is a positive number (greater than 0), log 'Added x parts.' 
//    - if the value is 0, log 'No Change.'
//    - if the value is negative, format the log as 'Removed x parts.' 
console.log('6. Showing supplyChanges...');
for (let x = 0; x < supplyChanges.length; x++) {
    if (supplyChanges[x] > 0) {
        console.log('Added', supplyChanges[x], 'parts.');
    } else if (supplyChanges[x] === 0) {
        console.log('No Change.');
    } else if (supplyChanges[x] < 0) {
        console.log('Removed', supplyChanges[x], 'parts.');
    } // end if 
} // end for

// STRETCH GOALS
console.log('---  Stretch Goals  ---');
// 7. Rewrite the `for` loop from #6 as a `for of` loop. 
console.log('7. Showing supplyChanges with "for of" loop');
for (x of supplyChanges) {
    if (x > 0) {
        console.log('Added', x, 'parts.');
    } else if (x === 0) {
        console.log('No Change.');
    } else if (x < 0) {
        console.log('Removed', x, 'parts.')
    }
}

// 8. Write a loop to determine the total number of parts available by
//    adding up all the numbers in the 'supplyChanges' array.
console.log('8. Total supplies available is:');

// 9. We have a large stash of parts in our warehouse that we 
//    need to box up and get ready for shipment. 
//    There are 572 parts in total, and each box holds 7 parts.
//    Use a `while` loop to keep adding parts to boxes until
//    no more boxes can be filled.
//    Then log how many boxes were filled, and how many parts are left over.
console.log('9. Filling boxes with a "while" loop');
let totalParts = 572;
let shipment = [];

console.log(totalParts);
// while loop
while (totalParts > 6) {
    // This will subtract 7 from totalParts and add 1 'box' to our shipment array until
    // the parts left cannot fill a box.
    totalParts -= 7;
    shipment.push('box');
} // end while

// After while loop we want to find out how many parts were left over and log it.
console.log('There are', totalParts, 'parts left.');
// Our shipment array length will give us a count for boxes that we will console log.
console.log('We need', shipment.length, 'boxes.');

// I took a intro java college course a long time ago and randomly remembered that I could get
// a remainder, which reminded me I could round down to the nearest whole number too.

// So just for fun we will reset totalParts to 572..
console.log('No loop for you')
totalParts = 572;
// The remainder of totalParts / 7 will get us whatever is left over that can't fill a box
// We'll assign that to a variable
let leftoverParts = totalParts % 7;
// We can divide our totalParts by 7, then round down to the nearest whole number 
// to get our totalBoxes
totalBoxes = Math.floor(totalParts / 7);
// We will console log leftoverParts and totalBoxes so we can see our answers 
// and double check the math
console.log('We have', leftoverParts, 'parts left.');
console.log('We need', totalBoxes, 'boxes.')

