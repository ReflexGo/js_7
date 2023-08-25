// ЗАДАНИЕ 1
function largestOfFour(arr) {
 //написати код тільки всередині функції
  return arr;
}
    
largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

function largestOfFour(arr){
    const results = [];
    for(let i = 0; i < arr.lenght; i++){
        let largestNumber = arr[i][0];
        for(let j = 1; j < arr[i].lenght; j++){
            if(arr[i][j] > largestNumber){
                largestNumber = arr[i][j];
            }
        }
        results[i] = largestNumber;
    }
    return results;
}

// ЗАДАНИЕ 2

function bouncer(arr) {
    //написати код тільки всередині функції
    return arr;
}
  
bouncer([7, "ate", "", false, 9]);
    
function bouncer(arr) {
    return arr.filter(item => Boolean(item));
}

console.log(bouncer([7, "ate", "", false, 9]));              // Поверне [7, "ate", 9]
console.log(bouncer(["a", "b", "c"]));                        // Поверне ["a", "b", "c"]
console.log(bouncer([false, null, 0, NaN, undefined, ""]));  // Поверне []
console.log(bouncer([null, NaN, 1, 2, undefined]));           // Поверне [1, 2]

// ЗАДАНИЕ 3

/*
function frankenSplice(arr1, arr2, n) {
    return arr2;
  }
  
  frankenSplice([1, 2, 3], [4, 5, 6], 1);

function frankenSplice(arr1, arr2, n){
    let loacalArray = arr2.slice();
    for(let i = 0; i < arr1.lenght; i++){
        localArray.splice(n, 0, arr1[i]);
        n++;
    }
}
*/

function frankenSplice(arr1, arr2, n) {
    let localArray = arr2.slice();
    
    for (let i = 0; i < arr1.length; i++) {
        localArray.splice(n, 0, arr1[i]);
        n++;
    }
    
    return localArray;
}

console.log(frankenSplice([1, 2, 3], [4, 5], 1));        // Поверне [4, 1, 2, 3, 5]
console.log(frankenSplice([1, 2], ["a", "b"], 1));      // Поверне ["a", 1, 2, "b"]
console.log(frankenSplice([1, 2, 3, 4], [], 0));       // Поверне [1, 2, 3, 4]

// ЗАДАНИЕ 4

/*function getIndexToIns(arr, num) {
    return num;
  }
  
  getIndexToIns([40, 60], 50);
*/
function getIndexToIns(arr, num) {
    arr.push(num); // Додаємо num в кінець масиву
    arr.sort((a, b) => a - b); // Сортуємо масив

    return arr.indexOf(num); // Знаходимо індекс num в відсортованому масиві
}

console.log(getIndexToIns([1, 2, 3, 4], 1.5));             // Поверне 1
console.log(getIndexToIns([20, 3, 5], 19));               // Поверне 2
console.log(getIndexToIns([10, 20, 30, 40, 50], 35));    // Поверне 3
console.log(getIndexToIns([10, 20, 30, 40, 50], 30));    // Поверне 2
console.log(getIndexToIns([3, 10, 5], 3));                // Поверне 0
console.log(getIndexToIns([5, 3, 20, 3], 5));             // Поверне 2