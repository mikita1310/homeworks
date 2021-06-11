var str = prompt("Введите любое значение");
function trim(str) {
  for (k = 0; k < str.length; k++) {
    if (str.charAt(k, str.length-1) !== " ") {
      return str.slice(k, str.length-1);
    }
  }
}

var ost = trim(str);

alert(`${"<"}` + ost + `${">"}`);

