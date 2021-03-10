var multiplier = 4;
for (var i = 0; i <= 10; i++) {
  var result = multiplier * i;
  console.log(multiplier + " * " + i + " = " + result);
}

// Shorter version
for (var multiplier = 0; multiplier <= 10; multiplier++) {
  for (var i = 0; i <= 10; i++) {
    var result = multiplier * i;
    console.log(multiplier + " * " + i + " = " + result);
  }
}
