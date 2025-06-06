function reverseArray(arr){
    let left=0,right=addEventListener.length-1;
    while(left<right){
        [arr[left],arr[right]]=[arr[right],arr[left]];
        left++;
        right--;
    }
    return arr;
}
