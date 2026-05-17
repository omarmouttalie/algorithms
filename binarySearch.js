const binarySearch = (arr, x) => {


    // Given a sorted array, we can search for an element 
    // using the binary search algorithm in O(log n) time complexity.

    let left = 0, right = arr.length - 1;

    while(left <= right) {

    let mid = Math.floor((left + right) / 2);

        if(arr[mid] === x){
            return `${x} was found at index: ${mid}`;
            break
        } else if (x > arr[mid]) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }

    }

    return `There's no presence of ${x} at the array`;


}

console.log(binarySearch([-10, -1, 0, 2, 3, 4, 15], 15)); // output: 15 was found at index: 6
 
