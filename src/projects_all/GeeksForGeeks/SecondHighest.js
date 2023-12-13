
class Solution{
    print2largest(arr,n){
        let first = -Infinity;
        let second = -Infinity;

        // There should be at least two elements
        if (n < 2) {
            return -1;
        }

        for (let i = 0; i < n; i++) {

            // If current element is greater
            // than first then update both
            // first and second
            if (arr[i] > first) {
                second = first;
                first = arr[i];
            }

            // If arr[i] is in between first
            // and second then update second
            else if (arr[i] > second && arr[i] != first) {
                second = arr[i];
            }
        }
        
        if (second == -Infinity)
            return -1;
        else
            return second;
    }
}

console.log(new Solution().print2largest([12,35,1,10,34,1],6))