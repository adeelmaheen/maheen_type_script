// For Lower case
var personalName1 = "Maheen";
console.log("lowercase:", personalName1.toLocaleLowerCase());
// FOR Upper case
console.log("UPPERCASE:", personalName1.toUpperCase());
// For Title case
console.log("Titlecase:", personalName1.replace(/\b\w/g, function (char) { return char.toUpperCase(); }));
