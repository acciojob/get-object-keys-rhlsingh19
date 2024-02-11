//your JS code here. If required.
// Define the student object
const student = {
  name: "Alice"
};

// Extend the Object prototype with getKeys() method
Object.prototype.getKeys = function() {
  return Object.keys(this);
};

// Example usage
console.log(student.getKeys()); // Output: ["name"]
