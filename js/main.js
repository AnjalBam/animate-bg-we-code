(function (x, f = () => x) {
  var x;
  var y = x;
  x = 6;
  console.log(x, y, f());
})(3);
