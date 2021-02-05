
function btcPrice(currentPrice,profitPercentige) {

  var priceWithProfit = ((currentPrice * profitPercentige)/ 100) + currentPrice;

  return priceWithProfit;

}

console.log(btcPrice(37855,-6.5));
