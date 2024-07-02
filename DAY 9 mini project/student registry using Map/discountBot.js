function discountBot (prices){
    // const pricesAfterDiscount = prices.map(data => {return data - 100})
   // if we use in curly bracket in arrow function then always use return
    const pricesAfterDiscount = prices.map(data =>  (data - 100))
    return pricesAfterDiscount
}
const prices = [200, 500, 230, 665]
console.log(`before discount prices ${prices} \n after discount prices 100 rupees ${discountBot(prices)}`)