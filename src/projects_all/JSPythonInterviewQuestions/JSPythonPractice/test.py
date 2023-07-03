def sort012(arr,n):
    # code here
    newArray = []
    while len(arr) > 0:
        min = arr[0]
        for i in arr:
            if i < min:
                min = i
        newArray.append(min)
        arr.remove(min)
    return newArray  

print(sort012([0, 2, 1, 2, 0],5))