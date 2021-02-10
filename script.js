// var Bitcoin = 45756;
// var Ethereum = 1771;
// var Cardano = 0.7617;
// var XRP = 0.4732;
// var Monero = 170;
// var Dai = 1;
// var Dash = 134;
// var EthereumClassic = 10;
// var Zcash = 110;
// var SingularityNET = 0.1391;
// var Autonio = 0.1885;



function btcPrice(currentPrice,profitPercentige) {

    var priceWithProfit = ((currentPrice * profitPercentige)/ 100) + currentPrice;

    return priceWithProfit;

}

data = btcPrice(173,8);

console.log(data);

document.body.innerHTML = " <p> Price will be: </p>" + " <h1> " + data + "</h1>";
