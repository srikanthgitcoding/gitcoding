rev = "987654321"


print(rev[::-1])




x = [1, 2 ,3, 4, 5]
newx = []
for i in range(1, len(x)+1):
  newx.append(x[-i])
  print x[-i]