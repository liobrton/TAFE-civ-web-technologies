// Challenge 3 Starter
const product = {
  name: "Southern Spain",
  location: "Valencia",
  price: 100,
  agent: "John",
  bookingId: "25256A"
};

// Your code goes here
for (let info_key in product) {
  console.log(`Product ${info_key} is ${product[info_key]}`)
}
