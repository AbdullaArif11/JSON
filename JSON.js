// node JSON.js

const user = {id: 1, name: 'Ami', job: 'coding'};
const stringified = JSON.stringify(user);
console.log(user);
console.log(stringified);

const shop = {
  Owner: 'Ami',
  address: {
    street: 'Bangladesh road',
    city: 'Bangladesh city',
    country: 'Bangladesh'
  },
  product: ['laptop', 'Desktop', 'Monitor', 'Computer-Hardware'],
  revenue: 650000,
  isOpen: true,
  isNew: false
}

console.log(shop);
const shopjson = JSON.stringify(shop)
console.log(shopjson);

const shopObject = JSON.parse(shopjson);
console.log(shopObject); 