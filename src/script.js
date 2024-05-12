console.log("Another customer approaching");

fetch("https://randomuser.me/api/").then(response => response.json()).then(data => console.log(data));

console.log("Our valued customer, please give me a moment while i ge some information back from the record dept");