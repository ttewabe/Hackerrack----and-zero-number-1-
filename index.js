// Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. Print the decimal value of each fraction on a new line with  places after the decimal.

//Note: This challenge introduces precision problems. The test cases are scaled to six decimal places, though answers with absolute error of up to 10-4 are acceptable.



//Javascript program to find the
// ratio of positive, negative, and
// zero elements in the array.
 
// Function to find the ratio of
// positive, negative, and zero elements
function positiveNegativeZero(arr)
{
     
    // Store the array length into
    // the variable len.
    let len = arr.length;
 
    // Initialize the postiveCount,
    // negativeCount, and zeroCountby
    // 0 which will count the total number
    // of positive, negative and zero elements
    let positiveCount = 0;
    let negativeCount = 0;
    let zeroCount = 0;
 
    // Traverse the array and count the
    // total number of positive, negative,
    // and zero elements.
    for(let i = 0; i < len; i++)
    {
        if (arr[i] > 0)
        {
            positiveCount++;
        }
        else if (arr[i] < 0)
        {
            negativeCount++;
        }
        else if (arr[i] == 0)
        {
            zeroCount++;
        }
    }
 
    // Print the ratio of positive,
    // negative, and zero elements
    // in the array up to four decimal places.
    console.log((positiveCount / len).toFixed(6) + " ");
    console.log((negativeCount / len).toFixed(6) + " ");
    console.log((zeroCount / len).toFixed(6));
    console.log("<br>");
}
 
// Driver Code.
 
// Test Case 1:
let a1 = [ 2, -1, 5, 6, 0, -3 ];
positiveNegativeZero(a1);
 
// Test Case 2:
let a2 = [ 4, 0, -2, -9, -7, 1 ];
positiveNegativeZero(a2);