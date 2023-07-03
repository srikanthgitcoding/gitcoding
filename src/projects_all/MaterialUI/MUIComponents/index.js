function findPairs(arr,n,x)
{
	let l = 0, r = n-1;
	let result = 0;
    let list = []

	while (l < r)
	{
		if (arr[l] + arr[r] < x)
		{
			result += (r - l);
            
			l++;
		}
		else
			r--;
	}

	return result;
}

	let arr = [1, 2, 3, 4, 5, 6, 7, 8];
	let n = arr.length;
	let x = 7;
	console.log(findPairs(arr,n,x));