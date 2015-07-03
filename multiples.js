// multiples found;
var multiples = "";
// sums of all multiples of 3 and 5
var sum = 0;
// our iterator
var counter = 1;

while (counter < 1000) {

  // Adds the counter to our sum if evenly divided by 3 or 5
  if (counter % 3 === 0 || counter % 5 === 0) {
    sum += counter;
    multiples += counter + ", ";
  }

  counter++;
}

// removes the comma from our last multiple
multiples = multiples.substring(0, multiples.length - 2);

// prints out our results
console.log("Multiples: " + multiples);
console.log("Sum: " + sum);