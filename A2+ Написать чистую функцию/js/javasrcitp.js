let str = prompt("Введите любое значение");
function trim(x) {
  let l = 0,
      r = str.length - 1;

  if (str[l] !== " " && str[r] !== " ") {
    console.log("no spaces");
    return str;
  } else {
    for (let i = l; i <= r; i++) {
      if (str[i] === " ") l++;
      else break;
    }

    for (let q = r; q >= 0; q--) {
      if (str[r] === " ") r--;
    }
    
    if (l > 0 && r < 0) {
      console.log("only spaces");
      return (str = "");
    } else {
      console.log("spaces was deleted")
      return str.slice(l, r + 1);
    }
  }
}

var ost = trim(str);

alert(`${"<"}` + ost + `${">"}`);
