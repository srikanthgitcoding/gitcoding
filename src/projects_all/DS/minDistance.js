function findOutAns(x, y) {
  return Math.min(Math.abs(x - y), Infinity);
}

function minDIstance(a, n, x, y) {
  let recent_x = -1,
    recent_y = -1;
  let ans = Infinity;

  for (let i = 0; i < n; i++) {
    if (a[i] == x) {
      recent_x = i;
      if (recent_y !== -1) {
        ans = findOutAns(recent_x, recent_y);
      }
    } else if (a[i] == y) {
      recent_y = i;
      if (recent_x !== -1) {
        ans = findOutAns();
      }
    }
  }
  if (ans == Infinity) return -1;
  return ans;
}

console.log(minDIstance([1, 2, 3, 4, 5, 6, 7, 8, 9], 9, 8, 1));
