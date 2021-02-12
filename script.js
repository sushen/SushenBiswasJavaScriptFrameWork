
function criptoSellingPrice(currentPresentPrice,profitPercentige) {

  var priceWithProfit = ((currentPresentPrice * profitPercentige)/ 100) + currentPresentPrice;

  return priceWithProfit;

}

var bitcoinProfitPrice = criptoSellingPrice(44700,11);
var etchereumProfitPrice = criptoSellingPrice(1750,18);

function profitableCripto(bitcoinProfitPrice,etchereumProfitPrice){
  var result;
  //this find the biggest number
  bitcoinProfitPrice>etchereumProfitPrice? result = ["bitcoin Profit is big Price = ",bitcoinProfitPrice]: result = ["etchereum Profit Price is Big",etchereumProfitPrice]
  return result;
}

var whichIsBig = profitableCripto(bitcoinProfitPrice,etchereumProfitPrice);

console.log(whichIsBig);
console.log(bitcoinProfitPrice);
console.log(etchereumProfitPrice)
