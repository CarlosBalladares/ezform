function clm() {
  let result = "";
  for (var i = 0; i < arguments.length; i++) {
    if (i === arguments.length - 1) {
      result += arguments[i];
    } else {
      result += arguments[i];
      result += " ";
    }
  }
  return result;
}

export default clm;
