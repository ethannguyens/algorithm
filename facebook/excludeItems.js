// could be potentially more than 3 keys in the object above

let items = [
  {color: 'red', type: 'tv', age: 18},
  {color: 'silver', type: 'phone', age: 20}
];

let excludes = [
  {k: 'color', v: 'silver'},
  {k: 'type', v: 'tv'},
];

function excludeItems(items, excludes) {
  excludes.forEach(pair => {
    items = items.filter(item => item[pair.k] !== pair.v);
  });
  return items;
}

console.log(excludeItems(items, excludes));

/*
1. Describe what this function is doing...
Try to filter the items on items array that not has conditions in excludes
2. What is wrong with that function ?
It filter the items in items array that match excludes (the other way round than intended);
3. How would you optimize it ?
*/

//O(N) exclude. We loop through the items array instead
// let items = [
//   {color: 'red', type: 'tv', age: 18},
//   {color: 'silver', type: 'phone', age: 20}
// ];
//
// let excludes = [
//   {k: 'color', v: 'silver'},
//   {k: 'type', v: 'tv'},
// ];

function excludeItems(items, excludes) {
  return excludes.reduce((items, pair) => items.filter(item => item[pair.k] !== pair.v), items);
}

function excludeItems2(item, excludes) {
  let excl = {};

  excludes.forEach((pair) => {
      const pairObj  = {};
      pairObj[pair.v] = true;
      excl[pair.k] ? "" : excl[pair.k] = pairObj;
  });

  console.log(excl);

  items = items.filter(item => {
    Object.keys(item).forEach((key) => {
      return excl[key] ? excl[key].hasOwnProperty(item[key]) : "" ;
    });
    return false;
  });

  return items;
}

// console.log(excludeItems(items, excludes));

console.log(excludeItems2(items, excludes));
