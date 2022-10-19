let stocks = {
  Fruits: ["strawberry", "grapes", "banana", "apple"],
  liquid: ["water", "ice"],
  holder: ["cone", "cup", "stick"],
  toppings: ["chocolate", "peanuts"],
};

let is_shop_open = true;
console.log(is_shop_open);

function time(ms) {
  return new Promise((resolve, reject) => {
    if (is_shop_open) {
      setTimeout(resolve, ms)
    } else {
      reject(console.log("Shop is closed"))
    }
  })
}

async function kitchen() {
  try {
    await time(2000)
    console.log(`${stocks.Fruits[1]} was selected`);
    console.log("Start Production");
    await time(2000)
    console.log("Cut the fruit");
    await time(2000)
    console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} were added`);
    await time(1000)
    console.log("start the machine");
    await time(1000)
    console.log(`${stocks.holder[2]} will hold the icecream`);
    await time(2000)
    console.log(`${stocks.toppings[1]} Selected as toppings`);
    await time(2000)
    console.log("Serving Ice cream");
  } catch (error) {
    console.log(`Customer left: `, error);
  } finally {
    console.log("The day has ended, the shop has closed");
  }
}

kitchen();