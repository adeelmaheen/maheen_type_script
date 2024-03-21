// For Lower case

let personalName1:string = "Maheen";
console.log("lowercase:" ,personalName1.toLocaleLowerCase() );



// FOR Upper case

console.log("UPPERCASE:" ,personalName1.toUpperCase());

// For Title case

console.log("Titlecase:" , personalName1.replace(/\b\w/g,(char)=> char.toUpperCase()));
