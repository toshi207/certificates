
for (let i = 1; i <= 10; i++) {
  console.log(i);
}


for (let i = 10; i >= 1; i--) {
  console.log(i);
}

let sum = 0;
for (let i = 1; i <= 100; i++) {
  sum += i;
}
console.log("Сумма:", sum); // 5050


const cities = ["Алматы", "Астана", "Шымкент", "Караганда", "Актобе"];
for (let i = 0; i < cities.length; i++) {
  console.log(`${i + 1}. ${cities[i]}`);
}


for (const city of cities) {
  console.log(city);
}


for (let i = 2; i <= 20; i += 2) {
  console.log(i);
}