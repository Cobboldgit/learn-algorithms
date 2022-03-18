function printAll(a) {
  a.map((el) => {
    console.log(el);
  });
}

printAll([1, 2, 3, 5, 6]);

function checkDuplicates(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (i != j) {
        if (arr[i] == arr[j]) {
          return "yes";
        }
      }
    }
  }
  return "No";
}

function checkDuplicates2(k) {
  let obj = {};
  for (let i = 0; i < k.length; i++) {
      console.log(obj);
    if (obj.hasOwnProperty(k[i])) {
      return "yes";
    } else {
       (obj[k[i]] = 1);
    }
  }

  return "No";
}
console.log(hasOwnProperty);

console.log(checkDuplicates2(["John", "Emma", "ama", "ama"]));

console.log(checkDuplicates(["John", "Emma", "ama"]));
