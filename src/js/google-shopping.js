var data = require('../products.json');

// Write your solutions below

//================ Problem One ===================//

// var itemCount = 0;

// for (var i = 0; i < data.items.length; i++) {
//   if (data.items[i].kind === "shopping#product") {
//     // console.log(data.items[i]);
//     itemCount += 1;
//   }
// }

// console.log(itemCount);

//================ Problem Two ==================//

// for (var i = 0; i <data.items.length; i++) {
//   if (data.items[i].product.inventories[0].availability == "backorder") {
//     console.log(data.items[i].product.title);
//   }
// }

//================ Problem Three =================//

// for (var i = 0; i < data.items.length; i++) {
//   if (data.items[i].product.images.length > 1) {
//     console.log(data.items[i].product.title);
//   }
// }

//================ Problem Four ==================//

// for (var i = 0; i < data.items.length; i++) {
//   if (data.items[i].product.brand == "Canon") {
//     console.log(data.items[i].product.title);
//   }
// }

//================ Problem Five ==================//

// for (var i = 0; i < data.items.length; i++) {
//   if (data.items[i].product.author.name == "eBay" && data.items[i].product.brand =="Canon") {
//     console.log(data.items[i]);
//   }
// }

//================ Problem Six ===================//

// for (var i = 0; i < data.items.length; i++) {
//   console.log(data.items[i].product.brand + " - $" + data.items[i].product.inventories[0].price)
//   console.log(data.items[i].product.images[0].link)
//   console.log("\n\n");
// }
