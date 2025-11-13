
const fs = require('fs');
console.log("1. Start script")

// Synchronous (blocking) operation
console.log("2. Reading")
const data = fs.readFileSync('user-details.txt', 'utf8');
console.log("3. Synchronous read")

// Asynchronous (non-blocking) operation
console.log("4. Reading file asynchronously")
fs.readFile('user-details.txt', 'utf8', (err, data) => {
    if (err) {
      console.error("5. Error reading file:", err);
    }
    console.log("6. Asynchronous read:", data);
});

console.log("7. End of script")