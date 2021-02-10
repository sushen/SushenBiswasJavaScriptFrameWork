function btcPrice(currentPrice,profitPercentige) {

    var priceWithProfit = ((currentPrice * profitPercentige)/ 100) + currentPrice;

    return priceWithProfit;

}

data = btcPrice(173,8);

console.log(data);

document.body.innerHTML = " <p> Price will be: </p>" + " <h1> " + data + "</h1>";
