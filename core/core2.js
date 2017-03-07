var d = require ('path');
var webhome = "./index.html";
var webabout = "./about.html";

console.log(d.normalize(webhome));
console.log(d.dirname(webabout));
console.log(d.basename(webabout));
console.log(d.extname(webabout));