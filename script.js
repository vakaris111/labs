// 1
let weightInKg = 70;
let weightInGrams = weightInKg * 1000;
console.log(`${weightInKg} kg is equal to ${weightInGrams} grams.`);

// 2
for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}

// 3
let dollars = prompt("Enter amount in dollars:");
let exchangeRate = 0.95; 
let euros = dollars * exchangeRate;
alert(`${dollars} dollars is equal to ${euros.toFixed(2)} euros.`);
