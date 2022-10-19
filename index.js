/* CALLBACKS --- HELL
----------------------- */

let stocks = {
  Fruits: ["strawberry", "grapes", "banana", "apple"],
  liquid: ["water", "ice"],
  holder: ["cone", "cup", "stick"],
  toppings: ["chocolate", "peanuts"],
};

let order = (fruit_name, call_production) => {
  setTimeout(() => {
    console.log(`${stocks.Fruits[fruit_name]} was selected`);
    call_production();
  }, 2000)
}

let production = () => {
  setTimeout(() => {
    console.log("Production has started");

    setTimeout(() => {
      console.log(`The Fruit has been chopped`);

      setTimeout(() => {
        console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} were added.`);

        setTimeout(() => {
          console.log('The machine has been started');

          setTimeout(() => {
            console.log(`${stocks.holder[0]} will hold the ice cream`);

            setTimeout(() => {
              console.log(`${stocks.toppings[0]} was added.`);

              setTimeout(() => {
                console.log('Serve Ice cream : )');
              }, 2000)
            }, 3000)
          }, 2000)
        }, 1000)
      }, 1000)
    }, 2000)
  }, 1000)
}

order(0, production)