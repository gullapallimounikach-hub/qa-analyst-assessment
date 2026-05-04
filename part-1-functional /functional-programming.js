```
Developed a Pure function to remove the duplicates in an array/list while preserving the original order. 
My approach is apply filter for each pair of number(n) and its index(i) against the index of the number with its first occurrance using indexOf().

example: numbers = [1,2,2,1] the corresponding indices will be [0,1,2,3]
filter checks for (1,0) -> numbers.indexOf(1) = 0 = i -> true -> added to output
then checks for (2,1) --> numbers.indexOf(2) = 1 = i -> true -> added to output
then checks for (2,2) --> numbers.indexOf(2) = 1 != i -> false -> not added to output
then checks for (1,3) --> numbers.indexOf(1) = 0 != i -> false -> not added to output
```
function removeDuplicates(numbers) {
    return numbers.filter((n,i) => {return numbers.indexOf(n) === i;});
}

console.log(removeDuplicates([1, 2, 3, 2, 4, 1, 5]))
console.log(removeDuplicates([1, 1, 1]))
console.log(removeDuplicates([]))