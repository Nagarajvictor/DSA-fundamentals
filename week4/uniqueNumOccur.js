const arr = [7, 7, 5, 5, 8, 7];
const uniqueAppearances = (arr = []) => {
  const map = {};
  const set = new Set();
  for (let i = 0; i < arr.length; i++) {
    const el = arr[i];
    map[el] = (map[el] || 0) + 1;
  }
  for (key in map) {
    const value = map[key];
    if (set.has(value)) {
      return false;
    }
    set.add(value);
  }
  return true;
};
console.log(uniqueAppearances(arr));
