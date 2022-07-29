a = [3,1,2];

function b(v1, v2) {
  console.log('c', v1, v2);
  return v1-v2;
}

a.sort(b);
console.log(a);