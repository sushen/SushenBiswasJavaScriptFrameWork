btcCoinMarketPrice = 37855;
profitPercentigeInput = -6.5;

function btcPrice() {
  var currentPrice = btcCoinMarketPrice;
  var profitPercentige = profitPercentigeInput;
  var priceWithProfit = ((currentPrice * profitPercentige)/ 100) + currentPrice;

  return priceWithProfit;

}

console.log(btcPrice());
