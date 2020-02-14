
function hasClones(array){
  return _.filter(array, function(string) {return string.includes( `CLONES`)}).length > 0;
}

function numClones(array) {
  return _.size(_.filter(array, function(string) {return string.includes( `CLONES`)}));
}

console.log(hasClones(['foo', 'bar bar', 'bazCLONESbaz']));
console.log(hasClones(['a', 'b', 'c', 'clones']));

console.log(numClones(['foo', 'bar bar', 'bazCLONESbaz']));// => 1
console.log(numClones(['foo CLONES', 'bar bar', 'bazCLONESbaz']));// => 2
console.log(numClones(['a', 'b', 'c', 'clones']));// => 0