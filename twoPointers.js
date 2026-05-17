const isPalindrome = (str) => {

    let left = 0, right = str.length - 1;

    while(left < right){

        if(str[left] === str[right]){
            return true;
            break;
        } else {
            left += 1;
            right -= 1;
        }

    }
    return false;

}
console.log(isPalindrome('OMAMO'))