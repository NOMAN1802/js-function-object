/*
function functionName(parameters){
    function body
    return
}
 var returnedValue = functionName(parameters value)
*/

function getAverage(assignment1,assignment2,assignment3){
    const total = assignment1+ assignment2+assignment3;
    const average = total/3;
    return average; 
}
const assignmentMark1 = 57;
const assignmentMark2 = 56;
const assignmentMark3 = 60;

var myAverage = getAverage(assignmentMark1,assignmentMark2,assignmentMark3);
console.log('my assignment so far:', myAverage);
