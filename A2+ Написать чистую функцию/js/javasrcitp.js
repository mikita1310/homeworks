var str = prompt("Введите любое значение");
function trim(str) {
  let v, d;
  for (let k = 0; k < str.length; k++) {
    if (str.charAt(k) !== " ") {
      v = str.slice(k);
      break;
    }
  }
  d = v;
  for (let k = v.length - 1; k >= 0; k--) {
    if (v.charAt(k) !== " ") {
      d = v.slice(0, k + 1);
      break;
    }
  }
  return d;
}

var ost = trim(str);

alert(`${"<"}` + ost + `${">"}`);
