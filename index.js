array1 = [1,3,6,9,17];
array2 = [2,4,10,17];
array3 = array1.concat(array2);

if(array1.length <= 5 && array2.length <= 5) {
    array4 = array3.sort((a, b) => {
        return a - b
    });

}

console.log("array4 ", array4);





